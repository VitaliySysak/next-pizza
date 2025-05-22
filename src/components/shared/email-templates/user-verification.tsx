import { cn } from "@/src/lib/utils";

interface Props {
  className?: string;
  code: string;
}

export const UserVerification: React.FC<Props> = ({ className, code }) => {
  return (
    <div className={cn("", className)}>
      <p>
        Verification code: <h2>{code}</h2>
      </p>
      <p>
        <a href={process.env.NEXT_PUBLIC_BASE_URL + "/api/auth/verify?code=" + code}>Confirm registration</a>
      </p>
    </div>
  );
};
