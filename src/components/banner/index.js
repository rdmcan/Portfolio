import { Link, useMediaQuery } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  socialArr,
  BannerTxtContent,
  BannerSocials,
} from "../../styles/banner";
import ReactTypingEffect from "react-typing-effect";
import Fade from "react-reveal/Fade";
import { useTheme } from "@mui/system";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <div
        style={{
          backgroundImage: `url(/images/banner/emile-perron-xrVDYZRGdw4-unsplash.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minWidth: "100%",
          height: "530px",
        }}
      >
        {matches ? (
          <BannerTxtContent>
            <BannerTitle>
              <ReactTypingEffect
                text="Data Analyst"
                speed={90}
                eraseDelay={10000000}
                typingDelay={600}
              />
            </BannerTitle>
            <BannerTitle marginTop="20px">
              <ReactTypingEffect
                text="Computer Programmer"
                speed={90}
                eraseDelay={100000000}
                typingDelay={5000}
                cursor="_"
              />
            </BannerTitle>
          </BannerTxtContent>
        ) : (
          <BannerTxtContent>
            <BannerTitle>
              <ReactTypingEffect
                text="Data Analyst"
                speed={90}
                eraseDelay={10000000}
                typingDelay={600}
                cursor=""
              />
            </BannerTitle>
            <BannerTitle>
              <ReactTypingEffect
                text="Computer Programmer"
                speed={90}
                eraseDelay={100000000}
                typingDelay={4000}
                cursor="_"
              />
            </BannerTitle>
          </BannerTxtContent>
        )}
      </div>
      <BannerContent>
        <Fade cascade>
          <BannerSocials>
            {socialArr.map((item) => (
              <Link
                aria-label={item.aria}
                href={item.href}
                fontSize={"1.5rem"}
                isExternal
                margin={"22px"}
              >
                {item.icon}
              </Link>
            ))}
          </BannerSocials>
        </Fade>
      </BannerContent>
    </BannerContainer>
  );
}
