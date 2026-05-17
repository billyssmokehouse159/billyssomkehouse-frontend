import { useDeviceType } from "../../hooks/useDeviceType";
import { Logo } from "../Headers/Logo";

export const Footer = () => {
  const device = useDeviceType();
  const isMobile = device === "mobile";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "rgb(230 225 219)",
          paddingTop: 50,
        }}
      ></div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: device === "mobile" ? "1fr" : "1fr 1fr 2fr",
          width: "100%",
          color: "#ff2b2b",
          backgroundColor: "rgb(51 51 51)",
          height: "50px",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Logo width={50} height={50} />
        </div>

        <div></div>
        <div
          style={{
            display: "grid",
            gridTemplateRows:
              device === "mobile" ? "2px 1fr 2px 1fr 2px 1fr 2px 1fr" : "1fr",
            gridTemplateColumns:
              device === "mobile" ? "1fr" : "2px 1fr 2px 1fr 2px 1fr 2px 1fr",
            fontSize: "25px",
            fontWeight: 400,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#ff2b2b",
            textAlign: "center",
            fontFamily: "'Bebas Neue', 'Oswald', sans-serif",
            width: "100%",
            justifyItems: "center",
            backgroundColor: "rgb(51 51 51)",
          }}
        >
          <Divider isMobile={isMobile} />

          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/menu")}
          >
            Menu
          </div>
          <Divider isMobile={isMobile} />
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/location")}
          >
            Location
          </div>
          <Divider isMobile={isMobile} />

          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/giftcard")}
          >
            GiftCards
          </div>
          <Divider isMobile={isMobile} />

          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/contact")}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export const Divider = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      style={{
        height: "100%",
        width: isMobile ? "100%" : "2px",
        backgroundColor: "pink",
      }}
    ></div>
  );
};
