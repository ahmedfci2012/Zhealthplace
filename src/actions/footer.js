export const FOOTER = 'FOOTER';

/**
 * Create logout Action
 */
export const footer = ( ) => ({
  type: FOOTER
});

const set_footer = (  ) => dispatch => {
   
  dispatch(footer());
}

export const userFooter = ( ) => dispatch => {
  console.log("footer   action");
 return dispatch(set_footer( ));
};
