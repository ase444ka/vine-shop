function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('Fonts', true, /\.css$/)); 
import './style.scss';
requireAll(require.context('Blocks', true, /\.s?css$/)); 
requireAll(require.context('Blocks', true, /\.js$/)); 