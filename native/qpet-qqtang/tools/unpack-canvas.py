"""Decode FFDec's optional JavaScript Packer text without evaluating JavaScript.

Usage: python unpack-canvas.py packed/frames.html unpacked/frames.html
Only the export's textual dictionary is expanded. No SWF or script is executed.
"""
from pathlib import Path
import argparse,ast,re,shutil
p=argparse.ArgumentParser(description=__doc__);p.add_argument('source',type=Path);p.add_argument('output',type=Path);a=p.parse_args()
text=a.source.read_text()
pattern=re.compile(r"eval\(function\(p,a,c,k,e,r\).*?\}\(('(?:[^'\\]|\\.)*'),(\d+),(\d+),('(?:[^'\\]|\\.)*')\.split\('\|'\),0,\{\}\)\);",re.S)
alphabet='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
def unpack(m):
    body=ast.literal_eval(m[1]);radix=int(m[2]);count=int(m[3]);words=ast.literal_eval(m[4]).split('|')
    assert radix<=62 and len(words)==count
    def decode(token):
        try:
            n=0
            for ch in token:n=n*radix+alphabet.index(ch)
            return words[n] if n<count and words[n] else token
        except (ValueError,IndexError):return token
    return re.sub(r'\b\w+\b',lambda t:decode(t[0]),body)
result,n=pattern.subn(unpack,text);assert n<=1
assert not re.search(r'\beval\s*\(',result)
a.output.parent.mkdir(parents=True,exist_ok=True);a.output.write_text(result)
helper=a.source.with_name('canvas.js')
if helper.exists() and helper.resolve()!=a.output.with_name('canvas.js').resolve():shutil.copyfile(helper,a.output.with_name('canvas.js'))
print('Decoded',n,'FFDec text packer block(s) into',a.output)
