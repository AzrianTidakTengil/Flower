import TuneIcon from '@mui/icons-material/Tune';
import metadata from '@/pages/metadata';
import { useDispatch } from 'react-redux';
import { isOpen } from '@/pages/lib/features/dialog';

export default function Navbar() {
    const dispatch = useDispatch();
    return(
        <nav className="bg-neutral-800/60 absolute top-0 right-0 left-0 z-40">
            <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="text-3xl font-bold">{metadata.developer}</div>
                    </div>
                    <div className='flex space-x-4'>
                        <div className='px-3 py-2 rounded-md hover:bg-neutral-800/20 text-white' onClick={() => dispatch(isOpen())}><TuneIcon fontSize='large'/></div>
                        <div className='px-3 py-2 rounded-md bg-neutral-800/20 text-white text-2xl'>{metadata.version}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}