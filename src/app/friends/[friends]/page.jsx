
import KeenkeeperFooter from '@/components/KeenkeeperFooter';
import ContactProfile from './ContactProfile';
import NotFound from '@/app/not-found';

const FriendsPage = async ({ params }) => {
    const response = await fetch('https://keen-keeper-project-iota.vercel.app/data.json', {
        cache: 'no-store'
    });
    const data = await response.json();

    const resolvedParams = await params;
    const friendId = resolvedParams?.friends;

    return (

        <div>
            {
                friendId < data.length
                    ? (<ContactProfile friends={friendId}></ContactProfile>)
                    : (<NotFound></NotFound>)

            }
            <KeenkeeperFooter></KeenkeeperFooter>
        </div>
    );
};

export default FriendsPage;