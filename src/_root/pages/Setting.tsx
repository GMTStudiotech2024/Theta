import { useState, ChangeEvent, FormEvent } from 'react';

export const Setting = () => {
  const [settings, setSettings] = useState({
    username: '',
    email: '',
    notification: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Simulate an API call
    setTimeout(() => {
      if (settings.username && settings.email) {
        console.log('Settings submitted:', settings);
        setSuccessMessage('Settings saved successfully!');
      } else {
        setErrorMessage('Please fill out all fields.');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="home-container flex-center max-h-screen bg-gray-900">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="h2-bold text-center text-gray-800 mb-8">Settings</h2>
        {successMessage && (
          <div className="mb-4 text-green-600 text-center">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 text-red-600 text-center">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block small-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={settings.username}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              aria-describedby="username-description"
            />
            <p id="username-description" className="text-sm text-gray-500">
              Enter your preferred username.
            </p>
          </div>
          <div>
            <label htmlFor="email" className="block small-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              aria-describedby="email-description"
            />
            <p id="email-description" className="text-sm text-gray-500">
              Enter your email address.
            </p>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="notification"
              name="notification"
              checked={settings.notification}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              aria-labelledby="notification-label"
            />
            <label id="notification-label" htmlFor="notification" className="ml-2 small-semibold text-gray-700">
              Enable Notifications
            </label>
          </div>
          <div>
            <button
              type="submit"
              className={`w-full py-3 px-4 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Saving...
                </div>
              ) : (
                'Save Settings'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;
