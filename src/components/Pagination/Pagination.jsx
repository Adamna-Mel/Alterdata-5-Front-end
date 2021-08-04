import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			marginTop: theme.spacing(2),
		},
	},
}));
function BasicPagination({ setSize, setPage }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{/* <Pagination count={10} /> */}
			<Pagination
				count={10}
				color="primary"
				onChange={(e, value) => setPage(value - 1)}
			/>
		</div>
	);
}

export default BasicPagination;
