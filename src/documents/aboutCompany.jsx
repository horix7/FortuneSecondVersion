
import React from 'react';
import paul from '../images/IMG_20200330_141645_174.jpg'
import benedict from '../images/benedict.jpeg'
import morris from '../images/IMG-20200412-WA0000.jpg'


let aboutCo = () => {
    return (

<div className="info1212">

<h4>About Fortune Auction</h4>
<p>Fortune Auction started as a result to create a bidding platform that people can
own items during this pandemic. We are a digital bidding platform that exhibit or
auction items and services for the luckiest person to own it.</p>
<p>
    
Purpose:​ We exist to provide people with the opportunity to own items of their
desire through luck at the thinnest fraction of its original cost as ticket cost.
</p>

<p>
Vision:​ To build a community of lucky people who have an unbias opportunity to
own items their desire through pure luck regardless of their background and
status.
</p>


<p>
Mission:​ To create an unbias technology platform that allows the luckiest person
to own items or services of their desire without human bias interference. Through
connecting the owner of such item or service to does who wants to own or used
them.
</p>
<p>
    
Values:
<br/>
1. Humility:​ We always seek to improve through feedback. Listen! Listen!! Listen!!!
<br/>

2. Honesty:​ We love to work with honest people (vendors & users) because honesty is
what we need to Transform peoples lives for the best regardless of their background.
<br/>

3. Innovation:​ We strive to create new things every time. We Test, fail, learn, iterate, &
repeat the process.
<br/>

<p>
TEAM: ​ We are a group of diverse passionate youths with the desire to build a
world where you can get your wants & needs without pain & hustle. We believe
that creating a community of people with the desire to meet their wishes and help
others meet theirs will build a better world. Join Us Today!
</p>


</p>
<div className="about">
                    <h3>TEAM</h3>
                    <div className="grid-three">
                        <div>

                        <div className="">
                            <img  width="230px" height="230px" src={benedict} alt="" className="cirke2"/>
                        </div>
                        <div className="textMed">Benedict Okolie</div>
                        </div>


                        <div>
                        <div className="">
                            <img  width="230px" height="230px" src={morris} alt="" className="cirke2"/>
                        </div>
                        <div className="textMed">Morris Mwitti</div>

                        </div>
                        
                        <div>
                        <div className="">
                            <img  width="230px" height="230px" src={paul} alt="" className="cirke2"/>
                        </div>
                        <div className="textMed">Paul Mahoro</div>

                        </div>
                        
                    </div>  
                    </div>

        </div>
    )

}

export default aboutCo;