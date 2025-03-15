const NavBar = () => {
    return (
        <div className="bg-myellow y-2 w-fit rounded-full px-1 py-1 gap-10 flex items-center">
            {/* active */}
            <div className="bg-pyellow rounded-full px-4 py-1">
                <a className="text-xs" href="">
                    Home
                </a>
            </div>
            <div className="px-4">
                <a className="text-xs" href="">
                    Data
                </a>
            </div>
            <div className="px-4">
                <a className="text-xs" href="">
                    Lapor
                </a>
            </div>
        </div>
    )
}

export default NavBar