import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Control, DeepMap, FieldError, useForm} from 'react-hook-form';

import {Button, Icon, Text} from '../../generals/core-ui';
import {ControlledTextInput} from '../../generals/components';

// Absences form type
export type AbsencesForm = {
  nik: string;
  password: string;
  selfieImgURL: string;
};

function Absences() {
  let {control, errors, handleSubmit, setValue} = useForm<AbsencesForm>();

  return (
    <>
      <View style={styles.container}>
        <Auth control={control} errors={errors} />
        <Button
          onPress={handleSubmit((_data) => {
          })}
          containerStyle={styles.nextButton}
        >
          Login
        </Button>
      </View>
    </>
  );
}

// Auth props type controls
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
            value: 8,
            message: 'NIK yang diinput tidak valid',
          },
        }}
        // transformOutput={(event) => {
        //   let output = event.target.value;
        //   let filteredOutput = output.replace(/[^0-9]/g, '');
        //   return filteredOutput.slice(0, 8);
        // }}
        error={!!errors.nik}
        helperText={errors.nik?.message}
        name='nik'
        label='NIK (Nomor Induk Karyawan)*'
        style={styles.input}
      />

      <ControlledTextInput
        control={control}
        rules={{
          required: 'Password wajib diisi',
          minLength: {
            value: 8,
            message: 'Password yang diinput tidak valid',
          },
        }}
        error={!!errors.password}
        helperText={errors.password?.message}
        name='password'
        label='Password*'
        style={styles.input}
      />
      
    </View>
  );
}

let styles = {
  container: {
    marginHorizontal: 16,
    marginVertical: 10,
    flex: 1,
    justifyContent:'center',
    
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
  input: {
    marginBottom: 20,
  },
  nextButton: {
    marginTop: 10,
  },
} as const;

export default Absences;
