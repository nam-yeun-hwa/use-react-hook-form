# 프로젝트 설명

  <video  autoplay controls loop muted src="https://private-user-images.githubusercontent.com/138950568/289345228-78ac1fed-fd19-456a-b167-80a21cf92759.mov?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIxOTU5NzYsIm5iZiI6MTcwMjE5NTY3NiwicGF0aCI6Ii8xMzg5NTA1NjgvMjg5MzQ1MjI4LTc4YWMxZmVkLWZkMTktNDU2YS1iMTY3LTgwYTIxY2Y5Mjc1OS5tb3Y_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIxMFQwODA3NTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZjI1NmFmMTdiZDBlNTU5YTE3YTJkODdiNDRjOTVlNGVlMmI2N2IwMmI4YWQ2NzBhMTcwMGNjYTRjMTQ0ODFmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.mKRv5BFF1PhykQuPeWyXKJJMxk3l4WqLmSClmjsXmR8"></video>



간단하게 유저매니저 페이지에 신규버튼을 누르면 신규유저를 등록하는 모달이 등장한다. </br>
신규 유저를 등록하는 과정에서 사용된 라이브러리 react-hook-form을 정리 하고자 한다.
(자잘한 기능 추가 및 리팩토링이 될 예정이다.)

# 기술스택
- next.js
- typescript
- emotion

# 폴더 구성
- page
  - userManager
- src
  - common 
  - components
    - common
    - layout
    - modal
    - ui
- store(redux-toolkit)
- types

  
# 사용 라이브러리

# react-hook-form

react-hook-form은 React 기반의 폼 관리를 단순화하고 최적화하기 위한 라이브러리 중 하나입니다. 

### 성능 최적화</br>
react-hook-form은 최적화된 성능을 제공합니다. </br>
Form 상태를 관리하는 방식이 효율적으로 설계되어 있어, 불필요한 리렌더링을 방지하고 빠른 폼 처리를 가능하게 합니다.

### 간편한 사용법</br>
react-hook-form은 간단하고 직관적인 API를 제공하여, 사용자가 쉽게 폼을 관리할 수 있습니다.</br>
복잡한 설정이나 보일러플레이트 코드를 최소화하여 개발자의 생산성을 높입니다.

### 최소한의 컴포넌트 상태 유지</br>
기존의 클래스 기반 상태 관리나 다른 폼 라이브러리들은 폼 필드마다 상태를 관리해야 했는데,</br>
react-hook-form은 최소한의 상태를 유지하면서도 폼을 효과적으로 처리합니다.

### 유연성 </br>
react-hook-form은 텍스트, 숫자, 체크박스, 라디오 버튼 등 다양한 유형의 입력 필드와 커스텀 밸리데이터,</br>
비동기 밸리데이션, 다단계 폼, 동적 폼 등 다양한 폼 시나리오를 지원합니다.

### 비제어 컴포넌트 지원</br>
다른 폼 라이브러리들은 보통 제어 컴포넌트를 사용하는 방식인 반면,</br>
react-hook-form은 비제어 컴포넌트를 채택하여 더욱 유연한 구조를 제공합니다.

### 퍼포먼스와 관련된 최적화</br>
큰 폼이나 복잡한 폼에서도 성능이 우수하게 유지됩니다.</br>
필요한 필드만을 업데이트하고 검증하므로 전체 폼을 다시 렌더링할 필요가 없습니다.

### Typescript 지원</br>
react-hook-form은 Typescript를 지원하여 정적 타입 검사를 활용할 수 있습니다.

### 확장성</br>
필요한 경우 커스텀 훅이나 로직을 구현하여 react-hook-form을 확장할 수 있습니다.
</br>
</br>
사용 예)
```shell
import React from 'react';
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, errors, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(formState.isValid); // 폼이 유효한지 여부
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          ref={register({
            required: 'Name is required',
            minLength: { value: 2, message: 'Minimum length is 2 characters' },
            maxLength: { value: 30, message: 'Maximum length is 30 characters' },
            pattern: { value: /^[A-Za-z]+$/, message: 'Only letters are allowed' },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;

```
### useForm 
useForm 훅을 사용하여 폼의 상태와 메서드를 가져옵니다. 이를 통해 폼의 전반적인 설정과 제어를 할 수 있습니다.

### register 
입력 필드를 React Hook Form에 등록하는 함수입니다. </br>
이 함수는 입력 필드의 ref 속성에 전달되어야 합니다. 예를 들어, ref={register}와 같이 사용할 수 있으며 react-hook-form이 해당 필드를 추적하도록 합니다.

### handleSubmit 
폼이 제출될 때 호출되는 함수로, 입력된 데이터를 처리하는 로직을 구현합니다.

### formState 
폼의 상태를 나타내는 객체로, 유효성 검사 결과, 제출 여부 등을 확인할 수 있습니다.

### watch
watch 함수는 특정 입력 필드의 값을 감시(watch)할 때 사용되는 함수입니다. </br>
이 함수를 사용하면 특정 필드의 값이 변경될 때마다 해당 값을 얻을 수 있습니다. 이는 주로 동적으로 폼의 상태나 특정 로직을 처리할 때 유용합니다.

### required
필드가 비어 있을 때 유효성 검사에 실패하도록 하는 속성입니다

### minLength
입력 값의 최소 길이를 지정하는 속성입니다. </br>
예를 들어, { minLength: { value: 5, message: 'Minimum length is 5 characters' } }와 같이 사용할 수 있습니다.

### maxLength
입력 값의 최대 길이를 지정하는 속성입니다. </br>
예를 들어, { maxLength: { value: 10, message: 'Maximum length is 10 characters' } }와 같이 사용할 수 있습니다.

### pattern 
정규 표현식을 사용하여 입력 값의 유효성을 확인하는 속성입니다. </br>
예를 들어, { pattern: { value: /^[A-Za-z]+$/, message: 'Only letters are allowed' } }와 같이 사용할 수 있습니다.

- 이메일
  - 올바른 이메일 주소를 입력
  -  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    
- 이름
  - 숫자, 특수문자, 공백 입력 불가
  - /^[가-힣a-zA-Z]+$/
    
- 패스워드 :
  - 8~15자 영문, 숫자, 특수문자
  -  /^(?=.*[a-zA-Z])(?=.*[!@#&$%^*+=-])(?=.*[0-9]).{8,15}$/

### validate 
사용자 정의 유효성 검사 함수를 정의할 수 있는 속성입니다.  </br>
입력 값이 주어진 조건을 충족하지 않으면 유효성 검사에 실패합니다. 함수는 유효성 검사를 통과하면 true를 반환하고, 실패하면 오류 메시지를 반환해야 합니다

#### 패스워드 확인
matchesPreviousPassword를 사용 한다. </br>
matchesPreviousPassword 함수는 react-hook-form 라이브러리에서 제공하는 내장 유효성 검사 함수 중 하나이다. 이 함수는 현재 입력 값이 이전에 입력한 다른 필드의 값과 일치하는지 여부를 확인 할 수 있다. 주로 비밀번호 확인과 같이 두 개의 입력 필드 간에 값을 일치시키기 위해 한다.
</br>
현재 value 값을 matchesPreviousPassword의 매개변수로 받아서 현재 value 값과 userPassowrd로 등록되어 있는 input의 value 값이 같지 않으면 "비밀번호가 일치하지 않습니다" 라는 메시지를 화면에 보여 준다.

    
```shell
  <input
    type="password"
      {...register(`${input을 구분할 등록 아이디}`, {
        validate: {
          matchesPreviousPassword: (value) =>
          value === methods.getValues(`userPassword`) ||
          "비밀번호가 일치하지 않습니다",
         },
       })}
       placeholder={placeholder}
       autoComplete="off"
   />
```

#### api 호출하여 해당 Email이 존재 하는지 확인하기
  
```shell
validate: {
  isAvailable: async value => {
  const res = await GetDuplicateEmail(value);
  return (
      (res && res.data.result) ||
      '이미 사용중인 이메일입니다. 다른 이메일을 입력하세요'
    );
  },
},
```
또는 아래와 같이 사용 할 수 있다.

```shell

const isAvailable = async() => {
  const res = await GetDuplicateEmail(value);
  return (
    (res && res.data.result) ||
    '이미 사용중인 이메일입니다. 다른 이메일을 입력하세요'
  );
}

<input
 type="text"
   {...register(`${registerId}`, {
   validate: isAvailable,
 })}
/>
```


### 에러 메시지 화면 표시

- error이 true일 경우 해당 에러 메시지를 화면에 표시 한다.
- input에 register로 등록된 아이디 값의 message값을 화면에 표시 해준다.

```shell
{errors && errors[`${registerId}`] && (
  <p className="warning-message">{`${
    errors[`${registerId}`]?.message
  }`}</p>
)}

.warning-message {
  color: #f00;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  padding: 10px 15px;
  margin-top: 10px;
  text-align: left;
}

```


