const FormReport = () => {
    return (
        <div className="border-4 border-black rounded-xl p-6 bg-white shadow-md max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Form */}
                <div className="flex flex-col">
                    <h1 className="text-3xl md:text-4xl font-bold text-pgreen mb-4">Lapor Disini!</h1>

                    <label className="text-pgreen font-semibold mb-1">Jenis Laporan</label>
                    <input
                        type="text"
                        placeholder="Jenis Laporan"
                        className="w-full p-3 mb-3 bg-gray-100 rounded-md focus:outline-none"
                    />

                    <label className="text-pgreen font-semibold mb-1">Deskripsi Laporan</label>
                    <textarea
                        placeholder="Deskripsi laporan"
                        className="w-full p-3 mb-3 bg-gray-100 rounded-md h-28 focus:outline-none"
                    />

                    <label className="text-pgreen font-semibold mb-1">Tanggal</label>
                    <input
                        type="date"
                        className="w-full p-3 mb-3 bg-gray-100 rounded-md focus:outline-none"
                    />

                    <label className="text-pgreen font-semibold mb-1">Tingkat Darurat</label>
                    <select
                        className="w-full p-3 mb-3 bg-gray-100 rounded-md focus:outline-none"
                    >
                        <option value="">Pilih Tingkat Darurat</option>
                        <option value="rendah">Rendah</option>
                        <option value="sedang">Sedang</option>
                        <option value="tinggi">Tinggi</option>
                        <option value="darurat">Darurat</option>
                    </select>

                </div>

                {/* Map */}
                <div className="flex flex-col bg-pyellow p-4 rounded-lg h-full">
                    <div className="flex">
                        <span className="bg-myellow border-4 border-black px-4 py-2 rounded-xl flex items-center gap-2 text-black font-bold text-lg mb-2 w-fit">
                            <span className="w-4 h-4 bg-red-600 rounded-full"></span>
                            Lokasi
                        </span>
                    </div>
                    <div className="w-full h-64 bg-gray-300 rounded-md flex items-center justify-center">
                        <span className="text-gray-600">[MAP]</span>
                    </div>
                </div>
            </div>
            <button className="bg-pgreen text-white font-semibold px-6 py-2 rounded-full w-full mt-4 hover:bg-green-700 transition">
                Kirim
            </button>
        </div>
    );
};

export default FormReport;