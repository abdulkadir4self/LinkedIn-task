import React from "react";



function ProtectedRoute(props){
    const ComponentToDisplay = props.component
return(<>
     
     <ComponentToDisplay/>

    </>)

}
export default React.memo(ProtectedRoute);
