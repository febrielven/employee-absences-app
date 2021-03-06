import React from 'react';
import {View, Alert} from 'react-native';
import {Control, DeepMap, FieldError, useForm} from 'react-hook-form';

import {Button, Text, Camera, ModalView, Preview} from '../../generals/core-ui';
import {ControlledTextInput} from '../../generals/components';
import fetchApi from '../../generals/helpers/fetchApi';
export type AbsencesForm = {
  nik: string;
  password?: string;
  selfieImgURL?: string;
};

function Absences() {
  let {control, errors, handleSubmit, setValue} = useForm<AbsencesForm>();
  let [showCamera, setShowCamera] = React.useState(false);
  let [showPreview, setShowPreview] = React.useState(false);
  let [showLogin, setShowLogin] = React.useState(true);
  let [imageSourceSelfie, setImageSourceSelfie] = React.useState(null);
  let [absences, setAbsences] = React.useState({} as AbsencesForm);

  let onCaptureDone = async (source: any) => {   
    setAbsences({
      nik: absences.nik,
      password: absences.password,
      selfieImgURL: source.uri,
    });
    setShowCamera(false);
    setShowPreview(true);
    setImageSourceSelfie(source);
  };
  let onUndo = () => {
    setShowPreview(false);
    setShowCamera(true);
    setImageSourceSelfie(null);
  };

  let onSave = async () => {
    await onAuthSelfie();
  };

  const onAuthSelfie = async () => {
    let {nik, password, selfieImgURL} = absences;
    var raw =  selfieImgURL;
    let {statusCode} = await fetchApi('/api/employee_absences', {
      method: 'POST',
      token: 'Basic ' + window.btoa(nik + ':' + password),
      body: raw,
      shouldTextPlan: true,
    });

    if (statusCode === 200) {
      setShowPreview(false);
      setShowCamera(false);
      alert('Absen anda sudah diterima');
      setShowLogin(true);
    }
  };

  const onAuthLogin = async (props: AbsencesForm) => {
    let {nik, password} = props;
    let {statusCode} = await fetchApi('/api/employee_auth', {
      method: 'POST',
      token: 'Basic ' + window.btoa(nik + ':' + password),
    });

    if (statusCode === 200) {
      setAbsences({
        nik: nik,
        password: password,
      });
      setShowCamera(true);
      setShowLogin(false);
    }
  };

  return (
    <>
      {showLogin && (
        <View style={styles.container}>
          <Auth control={control} errors={errors} />
          <Button
            onPress={handleSubmit((_data) => {
              onAuthLogin(_data);
            })}
            containerStyle={styles.nextButton}
          >
            Login
          </Button>
        </View>
      )}

      <ModalView visible={showCamera} style={styles.previewContainer}>
        <Camera onCaptureDone={onCaptureDone} />
      </ModalView>

      <ModalView visible={showPreview} style={styles.previewContainer}>
        <Preview uri={imageSourceSelfie} onSave={onSave} onUndo={onUndo} />
      </ModalView>
    </>
  );
}

type AuthProps = {
  control: Control<AbsencesForm>;
  errors: DeepMap<AbsencesForm, FieldError>;
};

function Auth({control, errors}: AuthProps) {
  return (
    <View>
      <Text size="xlarge" bold style={styles.category}>
        Login Karyawan WFH
      </Text>
      <Text size="large" bold style={styles.categoryDescription}>
        Masukan data akun Anda untuk proses absensi
      </Text>
      <ControlledTextInput
        control={control}
        rules={{
          required: 'NIK wajib diisi',
          minLength: {
            value: 6,
            message: 'Nik minimal 6 karakter',
          },
          maxLength: {
            value: 6,
            message: 'Nik maksimal 6 karakter',
          },
        }}
        error={!!errors.nik}
        helperText={errors.nik?.message}
        name="nik"
        label="NIK (Nomor Induk Karyawan)*"
      />

      <ControlledTextInput
        control={control}
        rules={{
          required: 'Password wajib diisi',
          minLength: {
            value: 6,
            message: 'Password yang diinput tidak valid',
          },
        }}
        error={!!errors.password}
        helperText={errors.password?.message}
        name="password"
        label="Password*"
        secureTextEntry={true}
      />
    </View>
  );
}

let styles = {
  container: {
    marginHorizontal: 16,
    marginVertical: 10,
    flex: 1,
    justifyContent: 'center',
  },
  category: {
    marginBottom: 8,
    fontWeight: '700',
    textAlign: 'center',
  },
  categoryDescription: {
    marginBottom: 33,
    fontWeight: '400',
    textAlign: 'center',
  },

  nextButton: {
    marginTop: 10,
  },
  previewContainer: {
    flex: 1,
    width: '100%',
  },
} as const;

export default Absences;
