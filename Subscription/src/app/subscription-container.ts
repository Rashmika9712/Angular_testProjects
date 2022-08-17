import { Subscription } from "rxjs";

export class SubscriptionsContainer{
    private subs =[];

    set add(s: Subscription){
        this.subs.push(s);
    }
}