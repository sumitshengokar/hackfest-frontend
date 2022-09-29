import React,{useState} from 'react'
import {usePaymentInputs} from 'react-payment-inputs';

function PaymentForm() {
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();
    const [card,setCard]=useState("");
    const [expiry,setExpiry]=useState("");
    const [cvv,setCvv]=useState("");
    const handleChangeCardNumber=(e)=>{
        setCard(e.target.value);
    }

    const handleChangeExpiryDate=(e)=>{
        setExpiry(e.target.value);
    }

    const handleChangeCVC=(e)=>{
        setCvv(e.target.value);
    }
  return (
    <div>
        <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={card} />
      <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiry} />
      <input {...getCVCProps({ onChange: handleChangeCVC })} value={cvv} />
      {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
    </div>
  )
}

export default PaymentForm