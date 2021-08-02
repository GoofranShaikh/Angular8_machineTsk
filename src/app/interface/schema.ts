export interface Schema {
    id: number,
    profile: string,
    FirstName: string,
    LastName: string,
    Email: string,
    MobileNo:number,
    Age: number,
    State: string,
    Country: string,
    Address: {
        [key:string]:Home;
        
    },
 

    tags: [
      {
        id:number,
        hobby: string
      }
    ]

  }
interface Home{
Address1: string;
Address2: string;

}
