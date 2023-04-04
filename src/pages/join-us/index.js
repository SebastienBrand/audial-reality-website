import Image from 'next/image'
import SVG from '@/images/pedestrian_crossing.svg'


export default function JoinUsPage() {
    /* TASK: When text is autofilled BG of input turns white when it needs to be transparent */ 
    /* TASK: DONATE Button needs to send to this link -> https://www.flipcause.com/secure/cause_pdetails/MTc5NDQ1 */
    /* TASK: BG NEEDS TO CHANGE AT PHONE SIZE (MEDIA QUERY ALREADY IN CSS FILE) */
    /* TASK: UI and font needs to scale at very small screen size (sub 400 ish px)  */
    /* TASK: Add functinality from coming soon page to here api call, honey trap etc etc. */

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
                <form action="#"  onSubmit={() => {} }>
                    <div className="flex flow-row join-us-input-padding ">
                        <input type="text" className="fn-input" name="given_name" placeholder="First Name" required />
                        <input type="text"  className="ln-input" name="family_name" placeholder="Last Name" required />
                        <input type="email" className="join-us-email" name="email" placeholder="Email Address" required/>
                    </div>
                    <input type="submit" className="submit" value="Join Today" />
                </form>
            </div>
            <p className="join-us-info-box" >
                We will send you updates on the project and application as we continue our endeavors.
            </p>
            <button className="donate-button">
                <a className="donate-button" href = "https://www.flipcause.com/secure/cause_pdetails/MTc5NDQ1">Donate to Support Soundscape</a>
            </button>
            <div className="bg-container" />
        </div>
    )
  }
  