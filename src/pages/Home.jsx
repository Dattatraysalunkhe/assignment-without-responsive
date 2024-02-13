import React from 'react'
import LOGO from '../assets/nav/LOGO.png'
import Hamburger from '../assets/nav/Hamburger.png'
import DesignSystemVer from '../assets/nav/DesignSystemVer.3.png'
import conectnow from '../assets/Partner/Vector.png'
import Illustartion from '../assets/Partner/Illustartion.png'

function Home() {
    return (
        <main className=' relative w-[1920px] h-[8618px] bg-[#040404]'>

            {/*  */}
            {/* //    desktop:w-[] desktop:h-[] desktop:mt-[] desktop:ml[] desktop:gap:[]     */}
            {/*       laptop:w-[] laptop:h-[] laptop:mt-[] laptop:ml[] laptop:gap:[]          */}
            {/*      tablet:w-[] tablet:h-[] tablet:mt-[] tablet:ml[] tablet:gap:[]      */}
            {/*      mobile:w-[] mobile:h-[] mobile:mt-[] mobile:ml[] mobile:gap:[]   */}

            <div className='absolute w-[1920px] h-[132px] laptop:max-desktop:h-[96px] laptop:max-desktop:w-[1440px]  '>

                <div className='absolute mt-[16px] ml-[80px] w-[313.48px] h-[100px] flex items-center '>


                    <div className='w-[48px] h-[48px]  '>
                        <img src={Hamburger} alt="" />
                    </div>
                    <div className='w-[241.48px] h-[100px] ' >
                        <img src={LOGO} alt="" />
                    </div>
                </div>

                <div className='  text-white absolute mt-[39px] ml-[570px] w-[779px] h-[56px] bg-gray-800 rounded-[100px] flex p-1 items-center mobile:max-laptop:hidden laptop:max-desktop:h-[56px] laptop:max-desktop:w-[608px]  '>

                    <div className='py-[11px] px-[32px] w-[192px] rounded-full hover:bg-[#1A1A1E] text-white text-center '>
                        <button className=''>The Company</button>
                    </div>

                    <div className='py-[11px] px-[32px] w-[192px] rounded-full hover:bg-[#1A1A1E] text-white text-center '>
                        <button className=''>Our Services</button>
                    </div>

                    <div className='py-[11px] px-[32px] w-[192px] rounded-full hover:bg-[#1A1A1E] text-white text-center '>
                        <button className=''>Our Expertise</button>
                    </div>

                    <div className='py-[11px] px-[32px] w-[192px] rounded-full hover:bg-[#1A1A1E] text-white text-center '>
                        <button className=''>Client Work</button>
                    </div>

                </div>

                <div className='mt-[38px] ml-[1695px] rounded-[100px] border-2 text-white w-[145px] h-[56px] gap-[8px] items-center'>
                    <div className='text-center items-center px-[32px] py-[10px] h-'>
                        <button>Engage Us</button>
                    </div>
                </div>





            </div>



            {/*  */}



            <div className='absolute w-[1326px] h-[196px] mt-[232px] ml-[297px] items-center text-white'>
                <div>
                    <h1 className='font-normal text-[74px] text-center'>Design System for scale</h1>
                </div>
                <div>
                    <p className='font-light text-[24px] text-center' >
                        Add consistency to the scaling up of User Experience with an organized <br></br>
                        assembly of guidelines, components and documentation
                    </p>
                </div>
            </div>



            {/*  */}
            <div className='absolute text-white mt-[528px] w-[1920px] h-[750px]' >
                <img src={DesignSystemVer} alt="" />
            </div>
            {/*  */}



            {/*  */}

            <div className='absolute w-[1920px] h-[3890px] mt-[1278px] bg-[#FFFFFF]'>

            </div>

            {/*  */}




            <div className='absolute mt-[1378px] ml-[297px]  '>
                <div className=' w-[1326px] h-[144px] '>
                    <h1 className='font-normal text-[60px] text-center  leading-[72px] ' >A design system for website & apps <br></br> is critical to resolve;</h1>
                </div>
            </div>
            {/*  */}
            <div className='absolute mt-[1610px] ml-[162px] w-[1596px] h-[496px] flex flex-col gap-32 items-center '>

                <div className='items-start w-[1596px] h-[204px] border-b-2' >
                    <div className='w-[1596px] h-[124px] flex justify-between'>
                        <div className='w-[321px] h-[108px] border-r-2 '>
                            <h1>/01</h1>
                            <div className='w-[321px] h-[72px] mt-[36px]'>
                                <p className='font-light text-[24px] leading-[36px]'>
                                    Inconsistent user experience.
                                </p>
                            </div>
                        </div>
                        <div className='w-[321px] h-[108px] border-r-2'>
                            <h1>/01</h1>
                            <div className='w-[321px] h-[72px] mt-[36px]'>
                                <p className='font-light text-[24px] leading-[36px]'>
                                    Design-led delays in go-to-market
                                </p>
                            </div>
                        </div>
                        <div className='w-[321px] h-[108px] border-r-2'>
                            <h1>/01</h1>
                            <div className='w-[321px] h-[72px] mt-[36px]'>
                                <p className='font-light text-[24px] leading-[36px]'>
                                    Disjointed digital brand image.
                                </p>
                            </div>
                        </div>
                        <div className='w-[321px] h-[108px]'>
                            <h1>/01</h1>
                            <div className='w-[321px] h-[72px] mt-[36px]'>
                                <p className='font-light text-[24px] leading-[36px]'>
                                    Disconnected dev-design sprints.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' items-baseline w-[1056px] h-[152px]  flex flex-col gap-[32px] '>
                    <div className='w-[1056px] h-[48px] justify-center '>
                        <h1 className='font-normal text-[36px] leading-[48px] text-center tracking-[-5%]' >Our proven methodology for Design Systems.</h1>
                    </div>
                    <div className='w-[1056px] h-[72px] '>
                        <p className='text-center font-light text-[24px] leading-[36px]'>Redesigning a design system is a densely strategised process
                            that involves careful planning, collaboration, and iterative refinement.</p>
                    </div>
                </div>

            </div>

            {/*  */}


            <div className=' absolute mt-[2206px] ml-[162px] w-[1700px] h-[754px] bg-red-700 border-2 '>

            </div>
            <div className=' absolute mt-[2206px] ml-[162px] w-[516px] h-[654px] bg-green-300 '>

            </div>
            <div className=' absolute mt-[2520px] ml-[202px] flex flex-col gap-[24px]'>
                <div className='w-[332px] h-[100px]'>
                    <div className='w-[60px] h-[28px]'>
                        <h1 className='font-light text-[16px] leading-[28px]'>Phase0</h1>
                        <div className='w-[332px] h-[72px]'>
                            <h1 className='font-normal text-[24px] leading-[36px]'>
                                Project planning and
                                kick-off
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='w-[332px] h-[142px] gap-[10px] flex flex-col'>
                    <div className='w-[436px] h-[32px]'>
                        <li className='w-[410px] h-[32px] ml-[26px] font-light text-[20px] leading-[32px] '>
                            Material download
                        </li>
                    </div>
                    <div className='w-[436px] h-[32px]'>
                        <li className='w-[410px] h-[32px] ml-[26px] font-light text-[20px] leading-[32px] '>
                            Kick-off and project planning
                        </li>
                    </div>
                    <div className='w-[436px] h-[32px]'>
                        <li className='w-[410px] h-[32px] ml-[26px] font-light text-[20px] leading-[32px] '>
                            Ways of working
                        </li>
                    </div>
                    <div className='w-[436px] h-[32px]'>
                        <li className='w-[410px] h-[32px] ml-[26px] font-light text-[20px] leading-[32px] '>
                            Goals and objectives
                        </li>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className='absolute mt-[2206px] ml-[702px] h-[516px] w-[516px] bg-green-400'>

            </div>

            <div className='absolute mt-[2582px] ml-[742px] w-[436px] h-[100px]'>

            </div>

            <div className=' absolute mt-[2582px] ml-[742px] w-[56px] h-[28px]'>
                <h1 className='font-light text-[16px] leading-[28px]'>Phase1</h1>
            </div>

            <div className='absolute mt-[2610px] ml-[742px] h-[72px] w-[436px]'>
                <h1 className='font-normal text-[24px] leading-[36px]'>
                    UX Research and <br></br>
                    Product Immersion
                </h1>
            </div>

            {/*  */}

            <div className='absolute mt-[2206px] ml-[1242px] h-[516px] w-[516px] bg-green-400'>

            </div>

            <div className='absolute mt-[2582px] ml-[1282px] w-[436px] h-[100px]'>

            </div>

            <div className=' absolute mt-[2582px] ml-[1282px] w-[56px] h-[28px]'>
                <h1 className='font-light text-[16px] leading-[28px]'>Phase2</h1>
            </div>

            <div className='absolute mt-[2610px] ml-[1282px] h-[72px] w-[436px]'>
                <h1 className='font-normal text-[24px] leading-[36px]'>
                    Design System mapping and <br></br> Moodboarding
                </h1>
            </div>

            {/*  */}

            {/* <div className='absolute mt-[2206px] ml-[1782px] h-[516px] w-[516px] bg-green-400'>

            </div>

            <div className='absolute mt-[2582px] ml-[1822px] w-[436px] h-[100px]'>

            </div>

            <div className=' absolute mt-[2582px] ml-[1822px] w-[56px] h-[28px]'>
                <h1 className='font-light text-[16px] leading-[28px]'>Phase3</h1>
            </div>

            <div className='absolute mt-[2610px] ml-[1822px] h-[72px] w-[436px]'>
                <h1 className='font-normal text-[24px] leading-[36px]'>
                MVP Style Guide and A/B Testing
                </h1>
            </div> */}

            {/*  */}

            <div className='absolute mt-[3160px] ml-[297px] h-[196px] w-[1326px] flex flex-col gap-[40px] items-center '>

                <div className='w-[1326px] h-[84px]'>
                    <h1 className='font-normal text-[74px] leading-[84px] text-center'>
                        Design system process highlights:
                    </h1>
                </div>

                <div className='w-[1056px] h-[72px] ' >
                    <p className='font-light text-[24px] leading-[36px] text-center' >A Design System redesign roadmap has to be delicately
                        handled and marked out with much careful consideration rather than impulse.
                    </p>
                </div>

            </div>

            {/*  */}


            <div className='absolute mt-[3456px] ml-[297px] w-[1326px] h-[1348px] flex flex-col justify-between' >

                <div className='w-[1326px] h-[292px] flex justify-between'>

                    <div className='w-[516px] h-[292px] flex flex-col gap-[24px]  justify-between border-b-2'>

                        <div className='w-[516px] h-[76px] '>
                            <h1 className='w-[23px] h-[28px] font-light text-[16px] leading-[28px]' >/01</h1>
                            <h1 className='w-[516px] h-[48px]  font-normal text-[36px] leading-[48px]'>Research first.</h1>
                        </div>
                        <div className='w-[516px] h-[192px]'>
                            <p className='font-light text-[20px] leading-[32px]'>
                                Our research is designed to interview stakeholders, end-users, and decision-makers in order
                                to grasp diverse needs. We incorporate findings into a comprehensive strategy that aligns
                                with business goals,
                                ensuring the Design system meets user expectations and industry standards.
                            </p>
                        </div>

                    </div>

                    <div className='w-[516px] h-[292px] flex flex-col gap-[24px] justify-between border-b-2'>

                        <div className='w-[516px] h-[76px] '>
                            <div className='w-[516px] h-[76px] '>
                                <h1 className='w-[23px] h-[28px] font-light text-[16px] leading-[28px]' >/01</h1>
                                <h1 className='w-[516px] h-[48px]  font-normal text-[36px] leading-[48px]'>Brand-centric DLS.</h1>
                            </div>
                        </div>
                        <div className='w-[516px] h-[192px]'>
                            <p className='font-light text-[20px] leading-[32px]'>
                                To reinforce the brand's visual identity, values and tone of voice,  we build consistency
                                in the use of brand colours, typography, and imagery, coupled with intuitive interactions
                                to foster brand affinity and loyalty across all touchpoints.
                            </p>
                        </div>

                    </div>


                </div>

                <div className='w-[1326px] h-[292px] flex justify-between '>

                    <div className='w-[516px] h-[292px] flex flex-col gap-[24px] justify-between border-b-2'>

                        <div className='w-[516px] h-[76px] '>
                            <div className='w-[516px] h-[76px] '>
                                <h1 className='w-[23px] h-[28px] font-light text-[16px] leading-[28px]' >/03</h1>
                                <h1 className='w-[516px] h-[48px]  font-normal text-[36px] leading-[48px]'>Design principles and guidelines.</h1>
                            </div>
                        </div>
                        <div className='w-[516px] h-[192px]'>
                            <p className='font-light text-[20px] leading-[32px]'>
                                Based on design trends, research outcomes and brand essence, we identify core values,
                                guidelines and themes that drive the design creation process
                                and craft an experience that is unique to the brand for its users.
                            </p>
                        </div>

                    </div>

                    <div className='w-[516px] h-[292px] flex flex-col gap-[24px] justify-between border-b-2'>

                        <div className='w-[516px] h-[76px] '>
                            <div className='w-[516px] h-[76px] '>
                                <h1 className='w-[23px] h-[28px] font-light text-[16px] leading-[28px]' >/04</h1>
                                <h1 className='w-[516px] h-[48px]  font-normal text-[36px] leading-[48px]'>Modularity for multiple use-cases.</h1>
                            </div>
                        </div>
                        <div className='w-[516px] h-[192px]'>
                            <p className='font-light text-[20px] leading-[32px]'>
                                We adopt a modular process of Design System creation. Based on use-cases and development
                                prioritization we create components, patterns and templates that empower
                                the design and dev teams to scale the sprint outcomes exponentially.
                            </p>
                        </div>

                    </div>


                </div>

                <div className='w-[1326px] h-[292px] flex justify-between'>

                    <div className='w-[516px] h-[292px] flex flex-col gap-[24px] justify-between border-b-2'>

                        <div className='w-[516px] h-[76px] '>
                            <div className='w-[516px] h-[76px] '>
                                <h1 className='w-[23px] h-[28px] font-light text-[16px] leading-[28px]' >/05</h1>
                                <h1 className='w-[516px] h-[48px]  font-normal text-[36px] leading-[48px]'>Cross-functional collaboration.</h1>
                            </div>
                        </div>
                        <div className='w-[516px] h-[192px]'>
                            <p className='font-light text-[20px] leading-[32px]'>
                                Our Design System collaboration is characterized by an inclusive working approach,
                                fostering outcomes that excel in scale, efficiency and cost-effectiveness. We drive
                                results that go beyond expectations, ensuring a synergy of
                                creativity and practicality for optimal Design System performance.
                            </p>
                        </div>

                    </div>

                    <div className='w-[516px] h-[292px] flex flex-col gap-[24px] justify-between border-b-2'>

                        <div className='w-[516px] h-[76px] '>
                            <div className='w-[516px] h-[76px] '>
                                <h1 className='w-[23px] h-[28px] font-light text-[16px] leading-[28px]' >/06</h1>
                                <h1 className='w-[516px] h-[48px] font-normal text-[36px] leading-[48px]'>Version control and documentation handover.</h1>
                            </div>
                        </div>
                        <div className='w-[516px] h-[192px]'>
                            <p className='font-light text-[20px] leading-[32px]'>
                                We manage the handover process meticulously, with robust documentation and tight
                                governance. Our processes ensure lasting consistency and quality, facilitating a seamless
                                transition and nurturing the sustained success of the design system over time.
                            </p>
                        </div>

                    </div>


                </div>

            </div>

            {/*  */}


            <div className='absolute mt-[4944px] ml-[297px] w-[1326px] h-[288px] bg-white '>

            </div>
            {/*  */}
            <div className=' absolute mt-[4944px] ml-[576px] w-[769px] h-[60px]  flex gap-[24px] justify-between'>
                <div className='b-x-64'>

                </div>
                <div className='w-[593px] h-[60px]'>
                    <h1 className='font-normal text-[48px] leading-[60px] text-center tracking-tight'>Design Systems are ideal for :</h1>
                </div>
                <div className='b-x-64' >

                </div>
            </div>
            {/*  */}
            <div className=' absolute mt-[5068px] ml-[297px] w-[1326px] h-[164px] '>

            </div>

            {/*  */}

            <div className='absolute mt-[5068px] ml-[297px] w-[1326px]  '>
                <h1 className='w-full border-b-2' ></h1>
            </div>

            {/*  */}
            <div className='absolute mt-[5120px] ml-[356px] w-[1210px] h-[72px] '>

                {/*  */}




            </div>
            {/*  */}
            <div className='absolute mt-[5120px] ml-[356px] w-[346px] h-[72px]  '>

            </div>
            {/*  */}
            <div className='absolute mt-[5120px] ml-[356px] w-[23px] h-[28px]'>
                <h1 className='font-light text-[16px] leading-[28px] text-center'>/01</h1>
            </div>
            {/*  */}
            <div className='absolute mt-[5120px] ml-[402px] w-[300px] h-[72px]'>
                <h1 className='font-light text-[24px] leading-[36px]'>Websites, apps and <br></br>products</h1>
            </div>
            {/*  */}
            <div className='absolute mt-[5120px] ml-[784px] w-[350px] h-[36px] '>

            </div>
            {/*  */}
            <div className='absolute mt-[5120px] ml-[784px] w-[26px] h-[28px]'>
                <h1 className='font-light text-[16px] leading-[28px] text-center'>/02</h1>
            </div>
            {/*  */}
            <div className='absolute mt-[5120px] ml-[834px] w-[300px] h-[36px]'>
                <h1 className='font-light text-[24px] leading-[36px]'>Product teams</h1>
            </div>
            {/*  */}
            <div className='absolute mt-[5120px] ml-[1216px] w-[350px] h-[72px]  '>

            </div>
            {/*  */}
            <div className='absolute mt-[5120px] ml-[1216px] w-[26px] h-[28px]'>
                <h1 className='font-light text-[16px] leading-[28px] text-center'>/03</h1>
            </div>
            {/*  */}
            <div className='absolute mt-[5120px] ml-[1266px] w-[300px] h-[72px]'>
                <h1 className='font-light text-[24px] leading-[36px]'>SaaS and Enterprise <br></br> start-ups</h1>
            </div>





            {/*  */}

            <div className='absolute mt-[5432px] ml-[297px] w-[1326px] h-[84px] text-white'>
                <h1 className='font-normal text-[74px] leading-[84px] text-center'>Our previous experience.</h1>
            </div>

            {/*  */}



            {/*  */}
            <div className='absolute mt-[5604px] ml-[100] bg-red-600 w-[2500px] h-[600px]'>

            </div>
            {/*  */}



            {/* feeling the lag of inconsistent desihn  */}
            <div className=' absolute mt-[6404px] bg-[#000E8C] w-[1920px] h-[444px] text-[#FFFFFF]'>
                <div className='absolute'>
                    <div className='absolute w-[474.57px] h-[621.24px] mt-[-0px] ml-[1275px]'>
                        <img className='' src={conectnow} alt="" />
                    </div>
                    <div className='w-[474.57px] h-[621.24px] mt-[-.6px] ml-[1291.63px]'>
                        <img className='' src={conectnow} alt="" />
                    </div>
                </div>

                <div className='absolute mt-[72px] ml-[190px] w-[1066px] h-[144px] '>
                    <h1 className='font-normal text-[48px] leading-[60px] tracking-tight'>
                        Feeling the lag of <br></br>inconsistent design?
                    </h1>
                </div>

                <div className='absolute mt-[208px] ml-[190px] w-[267px] h-[136px]'>

                </div>
                {/*  */}
                <div className='absolute mt-[208px] ml-[190px] w-[267px] h-[32px] '>
                    <h1 className='font-light text-[20px] leading-[32px] text-center'>Book  a consultation with us.</h1>
                </div>
                {/*  */}
                <div className='mt-[288px] ml-[190px]'>
                    <button className='px-[32px] py-[10px] border-2 rounded-[100px] ' >Connect now</button>
                </div>
                {/*  */}

            </div>
            {/*  */}


            {/* web and mobile apps */}
            <div className='absolute mt-[7048px] ml-[297px] h-[730px] w-[1326px] flex gap-[135px] text-white items-center '>

                <div className='w-[651px] h-[444px] flex-col gap-[48px]'>

                    <div className='w-[651px] h-[340px] flex flex-col gap-[24px]'>
                        <div className='w-[651px] h-[100px] justify-between'>
                            <div className='w-[148px] h-[36px]'>
                                <h1 className='font-light text-[24px] leading-[36px]'>
                                    /Next service
                                </h1>
                            </div>
                            <div className='w-[651px] h-[60px] mt-[40px]'>
                                <h1 className='font-normal text-[48px] leading-[60px] tracking-tight'>
                                    Web and mobile apps
                                </h1>
                            </div>

                        </div>
                        <div className='w-[651px] h-[216px]'>
                            <p className='font-light text-[24px] leading-[36px]'>
                                Design stickiness and retention for web and mobile customer apps with our proven and tested
                                Customer Experience Design process, builds behavioural engagement by leveraging Design Thinking for
                                an end-to-end view of the customer acquisition and retention journey.
                            </p>
                        </div>

                    </div>

                    <div className='w-[153px] h-[56] gap-[8px]'>
                        <button className='border-2 px-[32px] py-[10px] rounded-[100px]'>Know more</button>
                    </div>

                </div>

                {/*  */}

                <div className='w-540px h-[730px]'>
                    <img className='absolute w-[510px] h-[700px] ' src={Illustartion} alt="" />
                    <div className='w-[510px] h-[700px] mt-[30px] ml-[30px] bg-[#0D0D0D]'></div>
                </div>

            </div>
            {/*  */}



            {/* Footer */}

            <div className='absolute mt-[7978px] w-[1920px] h-[640px]'>

                {/* linkedin */}
                <div className=' mt-[100px] ml-[162px] bg-red-500 w-[1419px] h-[48px] text-white flex '>
                    <div className='w-[134px] h-[48px] flex '>
                        <li className='font-normal text-[36px] leading-[45px] tracking-tight'>LinkedIn</li>
                    </div>
                </div>

            </div>





        </main>
    )
}

export default Home
