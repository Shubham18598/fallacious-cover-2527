import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import styles from "./EachCard.module.css"
import Modal from "react-modal";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const EachCard = () => {

    const [data, setData] = useState([]);
    const [follow, setFollow] = useState(false);
    const [modalOn, setModalOn] = useState(false);
    const [payment, setPayment] = useState(false);
    const [amount, setAmount] = useState("");
    const { id } = useParams();
   
    let { title, category, descrition, percentage, days, imageUrl, raisedAmount } = data;

    const getIndividualTask = () => {
        axios.get(`https://vd6zqv.sse.codesandbox.io/campaign/${id}`).then((response) => {
            setData(response.data);
        });
    };

    useEffect(() => {
        getIndividualTask();
        // eslint-disable-next-line
    }, []);

    const postRaisedAmount = () => {
        raisedAmount = Number(raisedAmount) + Number(amount);
        axios.patch(`https://vd6zqv.sse.codesandbox.io/campaign/${id}`, {
            raisedAmount: raisedAmount,
          })
          .then((response) => {
            setData(response.data);
          });
        setModalOn(false);
      };

    return (
        <>
            <div className={styles.mainCont}>
                <div className={styles.imageCont}>
                    <img src={imageUrl} alt="Image" />
                </div>
                <div className={styles.textCont}>
                    <p>FUNDING</p>
                    <h1>{title}</h1>
                    <p className={styles.pa}>{descrition}</p>
                    <p> Campaign | Los Angeles, United States</p>
                    <div className={styles.fundStatus}>
                        <h2>$ {raisedAmount}</h2>
                        <p className={styles.pa}>943 backers</p>
                    </div>
                    <div className={styles.statusBar}></div>
                    <div className={styles.percentageCont}>
                        <p className={styles.p1}>{percentage} %</p>
                        <p className={styles.p1}>{days} Days Left</p>
                    </div>
                    <div className={styles.btnCont}>
                        <button className={styles.backItBtn} onClick={() => setModalOn(true)}>BACK IT</button>
                        <button className={styles.followBtn} onClick={() => setFollow(!follow)}>{follow ? "Following" : "Follow"}</button>
                    </div>
                </div>

                {payment ? (
                    <Navigate to={"/"} />
                ) : (
                    <Modal 
                        style={{
                            overlay: {},
                            content: {
                                margin: "auto",
                                backgroundColor: "white",
                                width: "500px",
                                height: "600px",
                                boxShadow: "0 0 20px #919191",
                                textAlign: "center",
                            },
                        }}
                        isOpen={modalOn}
                        onRequestClose={() => setModalOn(false)}
                    >
                        <h2>Back this project</h2>
                        <div className={styles.labelCont}>
                            <p>Make a contribution</p>
                        </div>
                        <div className={styles.inpCont}>
                            <input type="text" placeholder="$" value={amount} onChange={(e) => setAmount(e.target.value)} />
                            <button onClick={() => postRaisedAmount()}>Continue</button>
                        </div>
                        <div>
                        <img width="70%" height="70%" src={imageUrl} alt="Image" />
                        </div>
                    </Modal>
                    
                )}
            </div>

            <hr />

            <div className={styles.featuresCont}>
                <Tabs>
                    <div className={styles.categoryCont}>
                        <TabList
                            style={{
                                display: "flex",
                                width: "500px",
                                justifyContent: "space-around",
                                marginTop: "10px",
                            }}
                        >
                            <Tab style={{ listStyle: "none" }}>
                                <p className={styles.p1}>STORY</p>
                            </Tab>
                            <Tab style={{ listStyle: "none" }}>
                                <p className={styles.p1}>FAQ</p>
                            </Tab>
                            <Tab style={{ listStyle: "none" }}>
                                <p className={styles.p1}>UPDATES</p>
                            </Tab>
                            <Tab style={{ listStyle: "none" }}>
                                <p className={styles.p1}>COMMENTS</p>
                            </Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <div className={styles.storyCont}>
                            <h4>Prototype</h4>
                            <p>
                                The project team has a working demo, not the final product. Their ability to begin production may be
                                affected by product development or financial challenges. Learn More
                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className={styles.faqCont}>
                            <h3>Frequently Asked Questions</h3>
                            <h4>Can I pair my new Hyperscooter to my phone?</h4>
                            <p>
                            Yes! Simply choose Connect Phone from the dropdown menu 
                            on the Dfly’s Digital Display. Scan the QR code with your phone. 
                            All of your phone functions will then be visible on the Digital Display e.g. 
                            navigation, alerts etc..
                            </p>
                            <h4>How do I get information about my DFly Hyperscooter on my smart phone?</h4>
                            <p>
                            Download the Dragonfly app (soon to be released). 
                            You will then have access to all key features, settings and ride data on your smartphone.
                             This information is also accessible via the DF & DFX Digital Display.
                            </p>
                            <h4>Are the batteries removable and/or changeable?</h4>
                            <p>
                            Yes! The batteries are removable via a simple process.
                             You can charge one at your home or office, and ride another. Having more than one 
                             battery enables riders to extend their range. We've also installed
                             a lock key to provide further security for the battery itself.
                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className={styles.updateCont}>
                            <p>
                                by Flaüs <br />
                                Oct 1, 2022 • 9:00Am
                            </p>
                            <hr />
                            <h3>800+ Backers are Loving US!</h3>
                            <p>
                                Hello friends! Wow! In just 3 hours, Flaüs was 100% funded and the campaign has now grown to include
                                over 800 backers! That’s amazing, and you’re amazing for joining us. <br /> We can’t begin to express
                                how excited and humbled all of us here on the Flaüs team are. The overwhelmingly positive interest and
                                support for Flaüs has been extremely encouraging, and we cannot wait to deliver everything we promise,
                                and more. <br /> We’ll say this a lot: thank you all so much.
                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className={styles.commentsCont}>
                            <p>Post a comment</p>
                            <input type="text" />
                            <button>Post Comment</button>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default EachCard
