import {Button, makeStyles, TextField, Typography} from '@material-ui/core';
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import ChatIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ModalBlock from "../Components/ModalBlock";

// Material ui and other styles
const useStyles = makeStyles((theme) => ({

	wrapper: {
		display: 'flex',
		height: '100vh',
	},
	blueSide: {
		flex: '0 0 50%',
		backgroundColor: '#71C9F8',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		overflow: 'hidden',
	},
	blueSideInfo: {
		listStyle: 'none',
		padding: 0,
		margin: 0,
		width: 380,
		position: 'relative',

		'& li': {
			marginBottom: 40,
		},

		'& h6': {
			color: 'white',
			fontWeight: 700,
			fontSize: 20,
			display: 'flex',
			alignItems: 'center',
		}
	},
	blueSideIcon: {
		fontSize: 32,
		marginRight: 20,
	},
	blueSideBigIcon: {
		position: 'absolute',
		top: '55%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '300%',
		height: '300%',
	},
	loginSide: {
		flex: '0 0 50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginSideContainer: {
		width: 380,
	},
	loginSideIcon: {
		fontSize: 46,
	},
	title: {
		fontWeight: 700,
		fontSize: 32,
		marginBottom: 45,
		marginTop: 20,
	},

	'@media(maxWidth: 850px)': {
		blueSide: {
			flex: '0 0 100%',
		},
		loginSide: {
			flex: '0 0 100%',
		},
		wrapper: {
			flexWrap: 'wrap',
			height: '200vh',
		}
	}
}));

function SignIn() {
	//styles hook
	const classes = useStyles();

	// SignIn modal logic
	const [openSignIn, setOpenSignIn] = React.useState(false);
	const handleOpenSignIn = () => {
		setOpenSignIn(true);
	};
	const handleCloseSignIn = () => {
		setOpenSignIn(false);
	};


	return (
		<div className={classes.wrapper}>
			<section className={classes.blueSide}>
				<TwitterIcon color='primary' className={classes.blueSideBigIcon} />
				<ul className={classes.blueSideInfo}>
					<li><Typography variant='h6'> <SearchIcon className={classes.blueSideIcon} />Читайте о том что вам интересно</Typography></li>
					<li><Typography variant='h6'> <PeopleIcon className={classes.blueSideIcon} />Узнайте, о чем говорят в мире</Typography></li>
					<li><Typography variant='h6'> <ChatIcon className={classes.blueSideIcon} />Присоединяйтесь к общению</Typography></li>
				</ul>
			</section>
			<section className={classes.loginSide}>
				<div className={classes.loginSideContainer}>
					<TwitterIcon color='primary' className={classes.loginSideIcon} />
					<Typography variant="h4" className={classes.title} >Узнайте, что происходит в мире прямо сейчас</Typography>
					<Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
					<br/>
					<Button style={{marginBottom: 20}} variant='contained' color='primary' fullWidth>Зарегистрироваться</Button>
					<Button onClick={handleOpenSignIn} variant='outlined' color='primary' fullWidth>Войти</Button>
				</div> 
			</section>
			<ModalBlock title={'Войти в Твиттер'} open={openSignIn} onClose={handleCloseSignIn}>
				<TextField
                        margin='normal'
                        variant='filled'
                        id="standard-basic"
                        label="E-Mail"
                        type='email'
                        fullWidth
                        autoFocus
                    />
                    <TextField
                        margin='normal'
                        variant='filled'
                        id="standard-basic"
                        label="Password"
                        type='password'
                        fullWidth
                    />
                    <Button style={{marginBottom: 15, marginTop: 10}} variant='contained' color="primary" fullWidth>
                        Войти
                    </Button>
			</ModalBlock>
		</div>
	)
}

export default SignIn
