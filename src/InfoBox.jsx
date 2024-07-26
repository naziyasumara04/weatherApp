import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


export default function InfoBox({Info}){
    let img_url="https://images.unsplash.com/photo-1721655799196-7c50607778a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8";
    let hot_url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let cold_url="https://unsplash.com/photos/a-snow-covered-road-in-the-middle-of-a-forest-ZG2faW8rxDk";
    let rainy_url="https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    // let Info={
    //     city:"Mumbai",
    //     feelLike:40.05,
    //     humidity:70,
    //     temp:33.05,
    //     tempMax:33.05, 
    //     tempMin:33.05,
    //     weather:"haze"

    // }
    return(
        <div className="InfoBox">
        <h4>Weather Info-{Info.weather}</h4>
        <div className='container'>
        <Card sx={{ maxWidth: 345 }}>
        
        <CardMedia
          component="img"
          height="140"
          image={Info.humidity>80?rainy_url:Info.temp>15?hot_url:cold_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info.city}{Info.humidity>80?<BeachAccessIcon/>:Info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary"  component={"span"}>
            <div>Feelslike:{Info.feelLike}&deg;C</div>
            <div>Humidity:{Info.humidity}</div>
            <div>Temperature:{Info.temp}&deg;C</div>
            <div>Temp-Max:{Info.tempMax}&deg;C</div>
            <div>Temp-Min:{Info.tempMin}&deg;C</div>
            <p>Weather can be describe as <b>{Info.weather}</b> and feels like <b>{Info.feelLike}&deg;C</b></p>
          </Typography>
        </CardContent>
      
    </Card>
    </div>
        </div>
    )
}