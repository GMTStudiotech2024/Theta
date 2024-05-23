import { useState, useEffect, useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import gmtStudioLogo from '/assets/images/GMTStudio_.png';

const sendEmail = async (email: string): Promise<boolean> => {
  try {
    console.log(`Sending password reset email to ${email}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const isSuccess = Math.random() > 0.99; // 1% success rate
    return isSuccess;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError(false);
    setErrorMessage('');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setIsError(true);
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    const success = await sendEmail(email);
    setIsLoading(false);

    if (success) {
      setIsSubmitted(true);
      setEmail('');
      setIsError(false);
    } else {
      setIsError(true);
      setErrorMessage('Failed to send email. Please try again later.');
    }
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.trim());
  };

  return (
      <div className="max-w-md mx-auto p-6 bg-gradient-to-b from-zinc-950 to-slate-700 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <img src={gmtStudioLogo} alt="GMTStudio" className="w-auto h-12 md:h-16 mx-auto" />
          <h2 className="h3-bold text-sky-500 mt-2">Theta v0.7d</h2>
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>
        {isSubmitted ? (
            <div className="text-center">
              <p className="text-yellow-300 mb-4">
                Your request to reset your password has been sent to the admin account.
                You will receive further instructions via email.
              </p>
              <button
                  onClick={() => setIsSubmitted(false)}
                  className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Send Another Request
              </button>
            </div>
        ) : (
            <>
              <p className="text-gray-600 text-center mb-6">
                To reset your password, please enter your email address below, and
                we'll send a request to the admin account.
              </p>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6" aria-labelledby="forgot-password-title">
                <div className="mb-4">
                  <input
                      type="email"
                      id="email"
                      ref={emailInputRef}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      aria-label="Email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-invalid={isError}
                  />
                  {isError && (
                      <p className="text-red-600 mt-2">
                        {errorMessage}
                      </p>
                  )}
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                    disabled={isLoading || !validateEmail(email)}
                    aria-busy={isLoading}
                    aria-live="polite"
                >
                  {isLoading ? (
                      <div className="flex justify-center items-center">
                        <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                        Sending...
                      </div>
                  ) : (
                      'Submit Request'
                  )}
                </button>
              </form>
            </>
        )}
        <div className="text-center mt-6">
          <button
              onClick={() => navigate('/sign-in')}
              className="py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
          >
            Back to Login
          </button>
        </div>
      </div>
  );
};

export default ForgotPassword;
