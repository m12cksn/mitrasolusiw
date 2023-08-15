import localFont from "next/font/local";

export const generalsans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-LightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/GeneralSans-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-MediumItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/GeneralSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-GeneralSans",
});
