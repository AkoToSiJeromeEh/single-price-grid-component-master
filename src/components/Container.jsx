import PropTypes from 'prop-types'

export const Container = ({children , style}) => {
  return (
	<div className={`${style} p-[2rem_2rem]`}>
		{children}
	</div>
  )
}

Container.propTypes = {
	children : PropTypes.node,
	style : PropTypes.string
}

