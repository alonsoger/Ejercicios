//Junto con ObservableExample. Sirve para obtener valores en tiempo real
import { Observable} from 'rxjs';

export const getNumbers = new Observable(subscriber => {
    //We emit values
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
})
