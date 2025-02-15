import Swal from "sweetalert2";

export default function Account() {
  const handleLogin = () => {
    Swal.fire({
      title: "Login Berhasil!",
      text: "Jangan Lupa Follow lee",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "https://www.instagram.com/kyuu.kyii?igsh=cWJicjExeW1pODM=";
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white text-sm md:text-lg font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-md hover:bg-blue-600 transition-all w-4/5 md:w-2/5"
      >
        Login
      </button>
    </div>
  );
}
