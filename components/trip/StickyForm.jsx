"use client";

export default function StickyForm({ data }) {
  return (
    <div className="wrapper">

      {/* 🔥 PRICE CARD (SEPARATE) */}
      <div className="priceCard">
        <p className="priceLabel">Starting From</p>
        <h2>{data.price}</h2>
        <span>Per Person</span>
      </div>

      {/* FORM CARD */}
      <div className="formWrapper">
        <h3 className="title">Book This Trip</h3>

        <div className="form">
          <div className="inputGroup">
            <input placeholder=" " />
            <label>Full Name</label>
          </div>

          <div className="inputGroup">
            <input placeholder=" " />
            <label>Phone Number</label>
          </div>

          <div className="inputGroup">
            <input placeholder=" " />
            <label>Email Address</label>
          </div>

          <button className="cta">Get Quote</button>

          <p className="trust">⚡ Quick response within 24 hrs</p>
        </div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* 🔥 PRICE CARD */
        .priceCard {
          background: linear-gradient(135deg, #00aaff, #0077ff);
          color: #fff;
          padding: 20px;
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0, 119, 255, 0.25);
        }

        .priceLabel {
          font-size: 12px;
          opacity: 0.9;
        }

        .priceCard h2 {
          font-size: 32px;
          font-weight: 800;
          margin: 6px 0;
        }

        .priceCard span {
          font-size: 13px;
          opacity: 0.9;
        }

        /* FORM CARD */
        .formWrapper {
          background: #ffffff;
          padding: 24px;
          border-radius: 20px;
          border: 1px solid #eee;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        .title {
          font-size: 19px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .inputGroup {
          position: relative;
        }

        .inputGroup input {
          width: 100%;
          padding: 14px 12px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
        }

        .inputGroup label {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          font-size: 13px;
          color: #6b7280;
          background: #fff;
          padding: 0 4px;
          transition: 0.2s;
        }

        .inputGroup input:focus + label,
        .inputGroup input:not(:placeholder-shown) + label {
          top: -6px;
          font-size: 11px;
          color: #00aaff;
        }

        .cta {
          padding: 14px;
          border-radius: 14px;
          background: linear-gradient(135deg, #00aaff, #0077ff);
          color: #fff;
          font-weight: 700;
          cursor: pointer;
        }

        .trust {
          text-align: center;
          font-size: 12px;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}