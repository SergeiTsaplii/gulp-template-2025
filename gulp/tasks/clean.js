import {deleteAsync} from 'del';

const clean = () => {
    deleteAsync('dist')
}