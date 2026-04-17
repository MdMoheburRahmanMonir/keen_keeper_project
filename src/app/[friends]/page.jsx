
import KeenkeeperFooter from '@/components/KeenkeeperFooter';
import NotFound from '../not-found';
import ContactProfile from './ContactProfile';

const FriendsPage = async ({ params }) => {
    const response = await fetch('http://localhost:3000/data.json');
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