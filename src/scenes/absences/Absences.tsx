import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Control, DeepMap, FieldError, useForm} from 'react-hook-form';

import {Button, Icon, Text} from '../../generals/core-ui';
import {ControlledTextInput} from '../../generals/components';

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
        <Button>Next</Button>
      </View>
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
