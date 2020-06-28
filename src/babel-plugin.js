import template from "@babel/template"
import codecs from './codecs'
import formats from './formats'

const makeAST = (varName, importName) => {
    if (importName !== 'codecs' && importName !== 'formats') return null
    return template.statement.ast(`const ${varName} = ${JSON.stringify(importName === 'codecs' ? codecs : formats)};`)
}

const babelPlugin = () => ({
    visitor: {
        ImportDeclaration(path) {
            const ast = makeAST(path.node.specifiers[0].local.name, path.node.source.value)
            if (!ast) return
            path.replaceWith(ast)
        }
    }
})

export default babelPlugin