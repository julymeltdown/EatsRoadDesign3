import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../Home/Home';
import DetailView from '../MenuDetail/DetailView';

import OrderListView from '../OrderList/OrderListView';
import CompleteView from '../Complete/CompleteView';
import BucketViewContainer from '../Bucket/BucketViewContainer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import { getMenuThunk } from '../../../modules/getMenus/thunks';
import { useCookies } from 'react-cookie';


//파이어 베이스에서 데이터를 받아오는 형태라서 계속 리슨함. api로 한번만 받아오기를 해야할 듯.

const AppRouter = () =>{
    const [cookies, setCookies,removeCookies ] = useCookies(['buckets']);
    
    
    return(

        <Router>

                <Switch>

                    <Route exact path="/menu" 

                        component={(props:any)=><Home {...props}/>}

                    />

                    <Route exact path="/orderlist" 

                        component={(props:any)=><OrderListView {...props}/>}

                    />
                    <Route exact path="/bucket"
                        component={()=><BucketViewContainer/>}
                    />
                   

                    <Route exact path="/detail" 

                        component={(props:any)=><DetailView setCookies={setCookies} cookies={cookies} {...props}/>}

                    />
                    <Route exact path="/complete"
                        component={()=><CompleteView />}
                    />
                

                </Switch>
            
        </Router>
   
    );

}

export default AppRouter;