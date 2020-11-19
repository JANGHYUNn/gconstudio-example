import React,{useState} from 'react'
import {
        FormControl,
        OutlinedInput, 
        RadioGroup, 
        FormControlLabel, 
        Radio, 
        FormHelperText,
        FormLabel,
        Select,
        MenuItem,
        Button,
        TextField,
        } 
from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './App.css'

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 50,
    position: 'absolute',
    right: '45px',
    top: '12px',
    border: 'none',
    cursor: 'pointer'
  },
}));

function App() {
  const initState = {
    radioValue:'번역회사',
    email:'',
    password:'',
    companyName:'',
    unit:'none',
    selectDate:'',
  }
  const classes = useStyles();

  const [formData, setFormData] = useState(initState)
  const [language, setLanguage] = useState('korea')

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <div className="dataForm">
        <h2 className="mainText">Gconstudio 계정 만들기</h2>
        <span className="subText">하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.</span>
        <form onSubmit={submitHandler}>
          <RadioGroup value={formData.radioValue} className="radioGroup" name="radioValues" onChange={e => {
            setFormData({...formData,radioValue: e.target.value })
          }}>
            <FormControlLabel
              value="번역회사"
              control={<Radio style={{color:'#f15642'}}/>}
              label="번역회사"
            />
            <FormControlLabel
              value="의뢰인"
              control={<Radio style={{color:'#f15642'}}/>}
              label="의뢰인"
            />
             <FormControlLabel
              value="번역가"
              control={<Radio style={{color:'#f15642'}}/>}
              label="번역가"
            />
          </RadioGroup>
        <FormControl>
          <FormLabel 
            component="legend" 
            style={{
                    width:'69px',
                    height:'18px',
                    fontSize:'12px',
                    margin:'21.5px 23.4px 8px 5px'
            }}
            >기본정보 입력
          </FormLabel>
          <OutlinedInput 
            placeholder="이메일(아이디)를 입력하세요." 
            aria-describedby="email"
            value={formData.email}
            onChange={e => setFormData({...formData,email:e.target.value})}
            style={{
              width: '440px',
              height: '55px',
              margin: '0 0 6px',
              opacity: '0.5',
              border: 'solid 1px #7d8184'
            }}/>
            <FormHelperText style={{color: '#f15642', margin: '2px 308px 20px 11px', fontSize:'12px'}} id="email">
            {!formData.email ? 
              '이메일 양식을 확인하세요'
             : ' '}
            </FormHelperText>
            
        </FormControl>
        <FormControl>
          <OutlinedInput 
            placeholder="비밀번호를 입력하세요." 
            aria-describedby="password" 
            value={formData.password}
            onChange={e => setFormData({...formData,password:e.target.value})}
            type="password"
            style={{
              width: '440px',
              height: '55px',
              margin: '0 0 6px',
              opacity: '0.5',
              border: 'solid 1px #7d8184'
            }}/>
            
            <FormHelperText 
              style={{
                width: '479px',
                color: '#f15642', 
                margin: '2px 0 20px 10px', 
                fontSize:'12px'
              }} 
              id="password"
              >
              {!formData.password ? '비밀번호는 8자리 이상, 16자리 이하이고 영문, 숫자, 특수문자가 각 1자리 이상 포함되어야 합니다' : ' '}
            </FormHelperText>
        </FormControl>
        <FormControl>
          <OutlinedInput 
            placeholder="회사명을 입력하세요." 
            aria-describedby="company" 
            value={formData.companyName}
            onChange={e => setFormData({...formData,companyName:e.target.value})}
            style={{
              width: '440px',
              height: '55px',
              margin: '0 0 6px',
              opacity: '0.5',
              border: 'solid 1px #7d8184'
            }}/>
            <FormHelperText 
              style={{
                width: '479px',
                color: '#f15642', 
                margin: '2px 0 20px 10px', 
                fontSize:'12px'
              }} 
              id="company"
              >
              {!formData.companyName ? '회사명을 확인하세요' : ' '}
            </FormHelperText>
        </FormControl>
        <FormControl>
          <Select 
            aria-describedby="unit" 
            value={formData.unit}
            onChange={e => setFormData({...formData,unit:e.target.value})}
            style={{
              width: '440px',
              height: '55px',
              margin: '0 0 6px',
              padding: '0 0 0 10px',
              opacity: '0.5',
              border: 'solid 1px #7d8184'
            }}>
              <MenuItem value="none">화페단위를 선택하세요.</MenuItem>
              <MenuItem value="won">₩</MenuItem>
              <MenuItem value="dollar">$</MenuItem>
            </Select>
            <FormHelperText 
              style={{
                width: '479px',
                color: '#f15642', 
                margin: '2px 0 20px 10px', 
                fontSize:'12px'
              }} 
              id="unit"
              >
              {formData.unit === 'none' ? '필수 입력사항입니다' : ' '}
            </FormHelperText>
        </FormControl>
        <FormControl>
          <div style={{position:'relative'}}>
          <OutlinedInput
            placeholder="설립일을 선택하세요"
            value={formData.selectDate}
            disabled
            style={{
              width: '440px',
              height: '55px',
              margin: '0 0 6px',
              opacity: '0.5',
              border: 'solid 1px #7d8184',
            }}
          />
          <TextField
            type="date"
            className={classes.textField}
            onChange={e => setFormData({...formData,selectDate:e.target.value})}
          />
          <FormHelperText 
            style={{
              width: '479px',
              color: '#f15642', 
              margin: '2px 0 20px 10px', 
              fontSize:'12px'
            }} 
            id="password"
            >
            {!formData.selectDate ? '필수 입력사항입니다' : ' '}
          </FormHelperText> 
          </div>
        </FormControl>
        <Button variant="contained" style={{background:'#f15642', color:'#ffffff', width:'80px'}} type="submit">다음</Button>
        <Button variant="text" style={{textDecoration:'underline', color:'rgba(0, 0, 0, 0.6)'}}>로그인</Button>
      </form>
      </div>
      <div style={{textAlign:'left', width:'585px', marginLeft: '40px'}}>
      <Select
          native
          value={language}
          onChange={e => setLanguage(e.target.value)}
          defaultValue="korea"
          style={{fontSize: '12px', color: '#000000'}}
        >
          <option value="korea">한국어</option>
          <option value="en">영어</option>
        </Select>
        </div>
    </div>
  );
}

export default App;
