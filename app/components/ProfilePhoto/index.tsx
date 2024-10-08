import Image from 'next/image';

export default function ProfilePhoto() {
    return (
        <>
            <figure className="max-w-lg">
                <Image className="h-auto rounded-full sm:rounded-full max-w-full" src={'/profile-photo-square.jpeg'} alt="Saviour Eking with a big smile on his face 😊" width={1000} height={1000} priority />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Saviour Eking in his habitat </figcaption>
            </figure>

            {/* <Image className='rounded-full' src={ProfilePicture} alt='hello dog' width={243} height={243} /> */}
        </>
    );
}
