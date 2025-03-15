const FormReport = () => {
    return (
        <div className="border-4 border-solid border-black rounded-xl p-4">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-pgreen">Lapor di Sini!</h1>
                    <input type="text" placeholder="Jenis laporan" className="text-pgreen" />
                    <textarea name="" placeholder="Deskripsi laporan" id=""></textarea>
                    <input type="date" />
                    <input type="text" placeholder="Tingkat darurat" className="text-pgreen" />
                    <button>Kirim</button>
                </div>
            </div>
        </div>
    )
}

export default FormReport