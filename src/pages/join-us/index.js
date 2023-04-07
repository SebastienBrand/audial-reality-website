import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

export default function JoinUsPage() {
    /* TASK: (DONE) When text is autofilled BG of input turns white when it needs to be transparent */ 
    /* TASK: DONATE Button needs to send to this link -> https://www.flipcause.com/secure/cause_pdetails/MTc5NDQ1 */
    /* TASK: BG NEEDS TO CHANGE AT PHONE SIZE (MEDIA QUERY ALREADY IN CSS FILE) */
    /* TASK: UI and font needs to scale at very small screen size (sub 400 ish px)  */
    /* TASK: Add functinality from coming soon page to here api call, honey trap etc etc. */

    const [msg, setMsg] = useState('');
    const [color, setColor] = useState('green');

    const requestAddToEmailList = useCallback(async (payload) => {
        try {
            
            if (payload.special_req && payload.special_req.trim() !== ''){
                return  { msg: `Error: We are unable to process your request at this time.`, color: "yellow"  };
            } else {
                const fetchRoute = "/api/promotion/coming-soon";
                const response = await fetch(fetchRoute, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });
                    
                const data = await response.json();

                if( data.status >= 400){
                    console.log(data);
                    return { msg: `Error ${data.status}: ${data.title}`, color: "red"  }
                } else {
                    return { msg: "You have been added to the email list", color: "green"  }
                }    
            }
        } catch (error) {
            console.log(error);
            return { msg: `Error: ${error.msg}`, color: 'red'};
        }
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {

            let response = await requestAddToEmailList({
                email: e.target.email.value,
                firstName: e.target.given_name.value,
                lastName: e.target.family_name.value,
                special_req: e.target.special_req.value,
            })
        
            if( response.msg ){
                setColor(response.color);
                setMsg(response.msg);
            } 
        } catch (error) {
            console.log(error.msg);
            setColor('red');
            setMsg(`Error: ${error.msg}`);
        }     
    }, [requestAddToEmailList]);
    
        
    useEffect(() => {
        const inputFields = document.querySelectorAll('.join-us__form input');
        inputFields.forEach((field) => {
            const style = window.getComputedStyle(field);
            field.style.setProperty('-webkit-text-fill-color','white');
            field.addEventListener('focus', () => {
                field.style.setProperty('caret-color','white');
            });
        });
    }, []);
    
    return (
       <div className="join-us-page-wrapper" >
            <div className="join-us-logo-box" ><h1>Soundscape</h1><span>for everyone</span></div>
            <h2 className="join-us-title-box" >Coming Soon!</h2>
            <p className="join-us-para-box" >
                Welcome to <b>Soundscape for everyone</b>.<br/> 
                Sign up to get the latest updates as we work to bring<br/> 
                this to market over the coming months.
            </p>
            <div className="join-us-form-box join-us__form" >
                <form action="#"  onSubmit={handleSubmit}>
                    <div className="flex flow-row join-us-input-padding ">
                        <input type="text" className="fn-input" name="given_name" placeholder="First Name" required />
                        <input type="text"  className="ln-input" name="family_name" placeholder="Last Name" required />
                        <input type="email" className="join-us-email" name="email" placeholder="Email Address" required/>
                        <input type="text" className="special_req" name="special_req" />
                    </div>
                    <input type="submit" className="submit" value="Join Today"/>
                </form>
            </div>
            <p className="res-msg" style={{color}}>{msg ? msg : <>&nbsp;</> }</p>
            <p className="join-us-info-box">
                We will send you updates on the project and application as we continue our endeavors.
            </p>
            <button className="donate-button">
                <a className="donate-button" href = "https://www.flipcause.com/secure/cause_pdetails/MTc5NDQ1">Donate to Support Soundscape</a>
            </button>
            {/* <Image src="@/images/pill-white.png" width="20" height="20" /> */}
            <div className="bg-container" />
        </div>
        )
    }