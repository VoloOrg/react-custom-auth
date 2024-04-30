interface IAuthConfTexts {
  title: string;
  desc: string;
  redirectUrl: string;
  buttonText: string;
}

export const AUTH_CONFIRMATION_DETAILS: Record<string, IAuthConfTexts> = {
  forgotPassword: {
    title: " Please check your email",
    desc: "Your recovery link has been send to your email",
    redirectUrl: "/login",
    buttonText: "Login",
  },
  register: {
    title: "You have been successful registered",
    desc: "",
    redirectUrl: "/my-profile",
    buttonText: "My Profile",
  },
};
