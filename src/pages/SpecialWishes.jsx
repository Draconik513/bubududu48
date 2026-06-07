import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
Terimakasih atas setiap cinta yang aa beri tanpa henti, atas setiap perjuangan yang tak selalu terlihat tapi selalu terasa ✨🌈. 

Semoga usia barunya aa ini bisa membawa lebih banyak bahagia, lebih banyak mimpi yang jadi nyata, dan cinta kita....terus tumbuh tanpa jeda 🤍✨ 

Ya alloh diulang tahun suamiku yang ke-30 tahun ini, neng memohon kepadamu keberkahan atas umur suamiku, kelapangan atas rezeki suamiku, dan kemudahan dalam urusan suamiku..🤲🏻

Kabulkanlah doa neng ya alloh, doa tulus dari neng yang semoga engkau dengarkan dan engkau kabulkan 🤲🏻.

Ya alloh terimakasih atas karunia umur yang engkau berikan kepada suamiku , semoga dengan bertambahnya usia suamiku ini bisa dimanfaatkan suamiku untuk berbakti dijalan-mu, mengabdikan diri untuk anak dan istrinya. 

Ya alloh terimakasih karena engkau telah memberikan kesempatan lagi, kesempatan suamiku untuk menjadi pribadi yang lebih baik.

 Terimakasih ya alloh semoga engkau memudahkan jalan untuk suamiku ... 

Aamiin ya alloh 🤲🏻🤲🏻🤲🏻🤍



`
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-sky-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

         <div className="mb-8">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    webkit-playsinline="true"
                    x-webkit-airplay="allow"
                    className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                  >
                    <source src={vidioWishes} type="video/mp4" />
                  </video>
                </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-sky-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-sky-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Sulaeman💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                 My Heart Is Only for You, Honey. 🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
