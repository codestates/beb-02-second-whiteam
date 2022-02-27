import Sidebar from './Sidebar/index';
import { atom } from 'jotai';

const textAtom = atom('hello');

function Explore() {
  return (
    <>
      <Sidebar />
    </>
  );
}

export default Explore;
