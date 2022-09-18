import styled from "styled-components"

export const Body = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
padding: 10px;
background: linear-gradient(180deg, #2af598 0%, #009efd 100%);

.container{
 max-width: 700px;
 width: 100%;
 background: #fff;
 padding: 25px 30px;
 border-radius: 5px;
 .title{
    font-size: 25px;
    font-weight: 500;
    position: relative;
 }
 .title::before{
    content: '';
    position: absolute;
    left:0 ;
    bottom: 0;
    height: 3px;
    width: 30px;
    background:linear-gradient(135deg, #2af598 0%, #009efd 100%);
 }
 form .user-details{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
 }
}
form .user-details .input-box{
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px)
}

.user-details .input-box .details{
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}

.user-details .input-box input{
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 16px;
    border-bottom-width:  2px;
    transition: all 0.3s ease;
}
.user-details .input-box input:focus,
.user-details .input-box input:valid{
    border-color: #009efd;
}
form .gender-details .gender-title{
    font-size: 20px;
    font-weight: 500;
}
form .gender-details .category{
    display: flex;
    width: 80%;
    margin: 14px 0;
    justify-content: space-between;
}

.gender-details .category label{
    display: flex;
    align-items: center;
}
.gender-details .category .dot{
    height: 18px;
    width: 18px;
    background: #d9d9d9;
    border-radius: 50%;
    margin-right: 10px;
    border: 5px solid transparent;
    transition: all 0.3s ease;
}

#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three{
    border-color: #d9d9d9;
    background: #009efd;
}

form input[type="radio"]{
    display: none;
}

form .button{
    height: 45px;
    margin: 45px 0;
}

form .button input{
    height: 100%;
    width: 100%;
    outline: nono;
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    letter-spacing: 1px;
    background: linear-gradient(135deg, #2af598 0%, #009efd 100%);
}
@media(max-width: 584px){
    .container{
        max-width: 100%;
    }

    form .user-details .input-box{
        margin-bottom: 15px;
        width: 100%;
    }

    form .gender-details .category{
        width: 100%;
    }
    .container form .user-details{
        min-height: 300px;
        overflow: hidden
    }
  
}

`