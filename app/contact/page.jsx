import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="c-all">
          <div className="c-left">
            <p className="c-p1">contact me</p>
            <div className="lll">
              <Image
                src={"/phone (1).svg"}
                width={20}
                height={20}
                alt="phone"
              />
              <p className="c-allp">+998(97)721-32-33</p>
            </div>
            <div className="lll">
              <Image src={"/mail.svg"} width={20} height={20} alt="phone" />
              <p className="c-allp">azizbekabdunabiyev@gmail.com</p>
            </div>
            <div className="lll">
              <Image src={"/map.svg"} width={20} height={20} alt="phone" />
              <p className="c-allp">Tashkent</p>
            </div>
          </div>
          <div className="c-right">
            <Image
              className="c-img2"
              src={"/cimg1.png"}
              width={290}
              height={390}
              alt="contact img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
