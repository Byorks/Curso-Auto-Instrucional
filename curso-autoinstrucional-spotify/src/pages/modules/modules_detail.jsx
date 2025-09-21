import Class1 from "./classes/class_1"
import Class2 from "./classes/class_2";
import Class3 from "./classes/class_3";
import { useParams } from "react-router-dom"

export default function ModulesDetailPage() {
    const { id } = useParams();
    
    return(
        <>
         {id == 1 && <Class1 />}
         {id == 2 && <Class2 />}
         {id == 3 && <Class3 />}
        </>
    )
}