import { useEffect, useState, useRef } from "react";
import styles from "./ContactForm.module.scss";
import Image from "next/image";
import arrowWhite from "../../public/icons/Arrow-right-white.svg";
import * as gtag from "../../lib/gtag";

function Contact({ activepage }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const moveindateRef = useRef();
  const commentRef = useRef();
  const utmKeywordsRef = useRef();
  const utmSourceRef = useRef();
  const utmMediumRef = useRef();
  const [nameStatus, setnameStatus] = useState();
  const [emailStatus, setemailStatus] = useState();
  const [phoneStatus, setphoneStatus] = useState();
  const [moveindateStatus, setmoveindateStatus] = useState();
  const [commentStatus, setcommentStatus] = useState();
  const [formSuccess, setformSuccess] = useState(false);
  const [formError, setformError] = useState("");
  const [buttonSubmitted, setbuttonSubmitted] = useState(false);
  const [buttonSubmitted2, setbuttonSubmitted2] = useState(false);
  const [utmSource, setutmSource] = useState();
  const [utmMedium, setutmMedium] = useState();
  const [utmKeywords, setutmKeywords] = useState();

  const contactRef = useRef(null);

  function handleLabelClick(field) {
    switch (field) {
      case "name":
        setnameStatus(true);
        nameRef.current.focus();
        break;
      case "email":
        setemailStatus(true);
        emailRef.current.focus();
        break;
      case "phone":
        setphoneStatus(true);
        phoneRef.current.focus();
        break;
      case "moveindate":
        setmoveindateStatus(true);
        moveindateRef.current.focus();
        break;
      case "comments":
        setcommentStatus(true);
        commentRef.current.focus();
        break;
    }
  }
  function handleSubmit() {
    setbuttonSubmitted2(true);
    setbuttonSubmitted(true);
    async function sendLead() {
      //json post
      // const postJsonVaues = await {
      //   formdata_name: nameRef.current.value,
      //   formdata_email: emailRef.current.value,
      //   formdata_phone: phoneRef.current.value,
      //   formdata_moveindate: moveindateRef.current.value,
      //   formdata_comments: commentRef.current.value,
      // };

      let fd = await new FormData();
      fd.append("formdata_name", nameRef.current.value);
      fd.append("formdata_email", emailRef.current.value);
      fd.append("formdata_phone", phoneRef.current.value);
      fd.append("formdata_movein_date", moveindateRef.current.value);
      fd.append("formdata_comments", commentRef.current.value);
      fd.append("formdata_source", utmSourceRef.current.value);
      fd.append("formdata_medium", utmMediumRef.current.value);
      fd.append("formdata_keywords", utmKeywordsRef.current.value);

      const options = {
        method: "POST",
        // headers: {
        //   "Content-type": "application/json",
        // },
        // body: JSON.stringify(postJsonVaues),
        body: fd,
        // body: new URLSearchParams(
        //   "formdata_name=Omar Elbaga&formdata_email=oelbaga@newworldgroup.com&2017701404&Test"
        // ),
        // mode: "cors",
      };
      if (buttonSubmitted === true) return;
      const url = "https://nwgapi.com/apiforms/XXX/XX.php";
      const response = await fetch(url, options);
      const responseJson = await response.text();
      if (responseJson === "Success") {
        setformSuccess(true);
        setbuttonSubmitted(false);
        setbuttonSubmitted2(false);
      } else {
        setformError(responseJson);
        setbuttonSubmitted(false);
        setbuttonSubmitted2(false);
      }
      console.log(responseJson);
      // gtag.gconversion("XXXX");
    }
    sendLead();
  }
  useEffect(() => {
    if (localStorage.getItem("utm_source")) {
      const utmsource = localStorage.getItem("utm_source");
      setutmSource(utmsource);
    }
    if (localStorage.getItem("utm_medium")) {
      const utmmedium = localStorage.getItem("utm_medium");
      setutmMedium(utmmedium);
    }
    if (localStorage.getItem("utm_term")) {
      const utmkeywords = localStorage.getItem("utm_term");
      setutmKeywords(utmkeywords);
    }
  }, []);
  return (
    <section
      className={`${styles.formSection} ${
        activepage === "contact" ? styles.pt10 : styles.ptb150
      }`}
    >
      {/* {buttonSubmitted.toString()} */}
      <div className={styles.formContainer} ref={contactRef}>
        {formSuccess === false ? (
          <div className={styles.formcontent}>
            <div className={styles.formarea}>
              <form>
                <div className={styles.holdfield}>
                  <div
                    className={`${styles.label} ${
                      nameStatus ? styles.move : ""
                    }`}
                    onClick={() => handleLabelClick("name")}
                  >
                    Name*
                  </div>
                  <input
                    type="text"
                    className={styles.contactfield}
                    ref={nameRef}
                    onFocus={() => handleLabelClick("name")}
                  />
                </div>
                <div className={styles.holdfield}>
                  <div
                    className={`${styles.label} ${
                      phoneStatus ? styles.move : ""
                    }`}
                    onClick={() => handleLabelClick("phone")}
                  >
                    Phone*
                  </div>
                  <input
                    type="text"
                    className={styles.contactfield}
                    ref={phoneRef}
                    onFocus={() => handleLabelClick("phone")}
                  />
                </div>
                <div className={styles.holdfield}>
                  <div
                    className={`${styles.label} ${
                      emailStatus ? styles.move : ""
                    }`}
                    onClick={() => handleLabelClick("email")}
                  >
                    Email*
                  </div>
                  <input
                    type="email"
                    className={styles.contactfield}
                    ref={emailRef}
                    onFocus={() => handleLabelClick("email")}
                  />
                </div>
                <div className={styles.holdfield}>
                  <div
                    className={`${styles.label} ${
                      moveindateStatus ? styles.move : ""
                    }`}
                    onClick={() => handleLabelClick("moveindate")}
                  >
                    Move-in-Date
                  </div>
                  <input
                    type="text"
                    className={styles.contactfield}
                    ref={moveindateRef}
                    onFocus={() => handleLabelClick("moveindate")}
                  />
                </div>
                <div className={styles.holdfield}>
                  <div
                    className={`${styles.label} ${
                      commentStatus ? styles.move : ""
                    }`}
                    onClick={() => handleLabelClick("comments")}
                  >
                    Message
                  </div>
                  <input
                    type="text"
                    className={styles.contactfield}
                    ref={commentRef}
                    onFocus={() => handleLabelClick("comments")}
                  />
                </div>
                <div className={styles.errors}>
                  <p>{formError}</p>
                </div>
                <input
                  type="hidden"
                  ref={utmSourceRef}
                  defaultValue={utmSource}
                />
                <input
                  type="hidden"
                  ref={utmMediumRef}
                  defaultValue={utmMedium}
                />
                <input
                  type="hidden"
                  ref={utmKeywordsRef}
                  defaultValue={utmKeywords}
                />
                {buttonSubmitted ? (
                  <button
                    type="button"
                    className={`-whiteText  ${styles.button}`}
                  >
                    Sending ...
                  </button>
                ) : (
                  <button
                    className={`-modOrangeText ${styles.button} ${styles.largeText}`}
                    type="button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {formSuccess ? (
        <div className={`${styles.thankyoucontent} -uppercase`}>
          Thank you for your inquiry.
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Contact;
