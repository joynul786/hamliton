import { Typography, Container, Box, CardMedia } from "@mui/material";
import business from '../../assets/img/dynamicImg/Busness.png';
import interNetSerVice from '../../assets/img/dynamicImg/interNetSerVice.png';
import Images from "../../assets/img/images";

const InternetService = () => {
  return (
    <Box >
      <Container maxWidth="xl">
        <Box
          style={{
            backgroundImage: `url(${business})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // height: '550px',
            position: 'relative'
          }}
        >
          <Box>
            <Typography variant="h2" className="BusinessSolution">
              Business Solution
            </Typography>
          </Box>
          <Box className='FrmaImgConatiner'>
            <CardMedia className="frameImg" component='img' src={Images.Frame1} />
            <CardMedia className="frameImg" component='img' src={Images.Frame2} />
            <CardMedia className="frameImg" component='img' src={Images.Frame3} />
            <CardMedia className="frameImg" component='img' src={Images.Frame4} />
            {/* <CardMedia className="frameImg" component='img' src={Images.Frame5} /> */}
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box
          style={{
            backgroundImage: `url(${interNetSerVice})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '470px',
            backgroundSize: 'cover',
            position: 'relative'
          }}
        >
          <Typography variant="h2" color={'#000'} fontWeight={700} p={{ xs: 4, md: 8 }}>Internet SerVices</Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='mobileWireLess'>
            <Typography variant="h4" fontWeight={400} color={'#FFB200'} className="WirelessText" > Mobile Wireless connection</Typography>
            <Typography variant="h4" px={2} color={'black'} className="Wirelessp4"> P2P connections P2MP connections</Typography>
            <Box className='interNateTextConatiner'>
              <Typography variant="body1" color={'black'} fontWeight={500} > Hamilton offers mobile internet connections over 4G/5G LTE devices like modems, mifis, routers and E-SIM enabled lowcost mobile phones
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

    </Box>
  );
};

export default InternetService;
