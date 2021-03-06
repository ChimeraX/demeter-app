import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { CardMedia, Icon } from '@material-ui/core';
import Recipe from '../model/Recipe';
import DemeterXTheme from '../theming/DemeterXTheme';
import FlexGrow from '@chimerax/common-web/lib/widgets/FlexGrow';
import CreatorIcon, { CreatorIconProperties } from './CreatorIcon';

const useStyles = makeStyles((theme: DemeterXTheme) =>
	createStyles({
		root: {
			margin: '20px',
			background: theme.palette.primary.dark,
		},
		media: {
			paddingTop: '50%',
		},
		favorite: {
			color: 'red',
		},
		title: {
			textOverflow: 'ellipsis',
			overflow: 'hidden',
		},
		duration: {
			marginRight: theme.spacing(1),
		},
	}),
);

export interface RecipeCardProperties {
	recipe: Recipe;
	onFavorite?: () => void;
	onClick?: () => void;
	iconProperties: CreatorIconProperties;
}

function trimName(name: string): string {
	if (name.length < 30) {
		return name;
	} else {
		return `${name.slice(0, 30)}...`;
	}
}

const RecipeCard: React.FC<RecipeCardProperties> = (properties) => {
	// properties
	const { recipe, onFavorite, onClick, iconProperties } = properties;

	const [favorite, setFavorite] = useState(recipe.favorite);

	const handleFavorite = () => {
		onFavorite && onFavorite();
		setFavorite(!favorite);
	};

	// classes
	const classes = useStyles();

	// internal state

	// handlers

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={recipe.image}
				title={recipe.name}
			/>
			<CardHeader
				classes={{ title: classes.title }}
				avatar={<CreatorIcon {...iconProperties}/>}
				title={trimName(recipe.name)}
			/>
			<CardActions>
				<IconButton
					onClick={handleFavorite}>
					<Icon className={classes.favorite}>
						{favorite ? 'favorite' : 'favorite_border'}
					</Icon>
				</IconButton>
				{recipe.favorites}
				<Icon className={classes.duration}>schedule</Icon>
				{`${recipe.duration} min`}
				<FlexGrow/>
				<IconButton
					onClick={() => onClick && onClick()}>
					<Icon>launch</Icon>
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default RecipeCard;
