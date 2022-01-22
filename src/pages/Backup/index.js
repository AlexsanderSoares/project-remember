import React, {useState, useEffect} from 'react';
import {PermissionsAndroid, Alert} from 'react-native';
import { Container, Form, Label, 
          BackupContainer, BackupText, BackupTextNegrito, Submit, 
              SubmitText, RadioButtonContainer, RadioButtonLabel, InputContainer, FileInput, SelectFile } from './styles';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const RNFS = require('react-native-fs');
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Backup = () => {

  const passwordState = useSelector(state => state.data);
  const [lastBackup, setLastBackup] = useState("");
  const [fileBackup, setFileBackup] = useState(null);

  const dispatch = useDispatch();

    async function getLastBackupDate(){
        const lastBackupDate = await AsyncStorage.getItem('MinhasSenhas@lastBackupDate');
        const lastBackupTime = await AsyncStorage.getItem('MinhasSenhas@lastBackupTime');

        setLastBackup(`${lastBackupDate} às ${lastBackupTime}`);
    }

    async function permissionRequest(){
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "Permissão de armazenamento",
                message: "O aplicativo precisa de permissão de armazenamento.",
                buttonNeutral: "Pergunte-me depois",
                buttonNegative: "Cancelar",
                buttonPositive: "OK"
            }
        );
    }

    useEffect(() => {
        getLastBackupDate();
    }, []);

  async function createBackup(){

        permissionRequest();

        const path = RNFS.ExternalStorageDirectoryPath;

        await RNFS.mkdir(`${path}/MinhasSenhasBackup`);

        console.log(response);

        const timestamps = new Date().getTime();
        
        RNFS.writeFile(`${path}/MinhasSenhasBackup/MS-BACKUP-${timestamps}`, JSON.stringify(passwordState)).then(async (success) => {
            
            await AsyncStorage.setItem('MinhasSenhas@lastBackupDate', new Date().toLocaleDateString());
            await AsyncStorage.setItem('MinhasSenhas@lastBackupTime', new Date().toLocaleTimeString());

            getLastBackupDate();
            
            Toast.show({
                type: 'success',
                text1: "Backup realizado com sucesso",
                position: 'bottom',
                visibilityTime: 2000,
            });
        })
        .catch(error => {
            Toast.show({
                type: 'error',
                text1: "Não foi possível realizar o backup",
                position: 'bottom',
                visibilityTime: 2000,
            });
        });
  }

  async function pickerFile(){
      try{
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles]
            });

            setFileBackup(res[0]);

      }catch(err){
        
      } 
  }

  async function restoreBackup(){
      try{

            const fileToRestoreData = await RNFS.readFile(fileBackup.uri, 'utf8');

            dispatch({type: 'RESTORE_BACKUP', data: JSON.parse(fileToRestoreData)});

            Toast.show({
                type: 'success',
                text1: "O backup foi restaurado com sucesso",
                position: 'bottom',
                visibilityTime: 2000,
            });

      }catch(err){
            Toast.show({
                type: 'error',
                text1: "Não foi possível restaurar o backup",
                position: 'bottom',
                visibilityTime: 2000,
            });

            console.log(err);
      }
  }

  return (
        <Container>
            <Form>
                <Label>
                    Realizar Backup
                </Label>
                <BackupContainer>
                    <BackupText>
                        Ultimo backup realizado em 
                        <BackupTextNegrito>
                            {"\b"}{lastBackup}
                        </BackupTextNegrito>
                    </BackupText>
                    <BackupText>
                        {"\n"}Todos os backups são salvos no diretório{"\n"}<BackupTextNegrito>{RNFS.ExternalStorageDirectoryPath}/MinhasSenhas/</BackupTextNegrito>
                    </BackupText>
                </BackupContainer>
                <Submit onPress={() => createBackup()}>
                    <SubmitText>
                        Realizar novo backup
                    </SubmitText>
                </Submit>
            </Form>
            <Form>
                <Label>
                    Restaurar Backup
                </Label>
                <InputContainer>
                    <FileInput placeholder={!!fileBackup ? fileBackup.name : "Selecionar arquivo de backup"}/>
                    <SelectFile onPress={() => pickerFile()}>
                        <Icon name="file" size={22} color="#483D8B"/>
                    </SelectFile>
                </InputContainer>
                <Submit disabled={!!fileBackup ? false : true} onPress={() => restoreBackup()}>
                    <SubmitText>
                        Restaurar backup
                    </SubmitText>
                </Submit>
            </Form>
        </Container>
  );
}

export default Backup;