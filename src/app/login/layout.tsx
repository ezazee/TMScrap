import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={`${poppins.className}`}>{children}</main>;
}
