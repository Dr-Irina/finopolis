import React, { useRef, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, closeHandler) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		function handleClickOutside(event) {
			// event.stopPropagation();
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (!ref.current || ! ref.current.contains(event.target)) {
				closeHandler(event);
			}
		}
		// Bind the event listener
		document.addEventListener('click', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('click', handleClickOutside);
		};
	}, [closeHandler, ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, props.onClickOutside);
	return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideAlerter;
