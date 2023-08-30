import Logo from './components/images/logo'


export default function Banner() {
    return(
        <div className="flex justify-center bg-sky-400 h-28 ">
            <Logo/>
            <p className="text-4xl font-mono py-8 px-2"> PlusTalk</p>
                

        </div>

    );
}