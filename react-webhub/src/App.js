import React, { Component } from 'react';
import './App.css';
import Card from './component/Card';
import OrderType from './component/OrderType'
import OrderReverse from './component/OrderReverse';

class App extends Component {
  'use strict'
 
  constructor() {
    super();
    this.state = {
      items: [],
      reversed: false,
      selected: true
    }

    this.renderItem = this.renderItem.bind(this);
    this.compare = this.compare.bind(this);
    this.itemSort = this.itemSort.bind(this);
    this.itemReverse = this.itemReverse.bind(this);
  }

  UNSAFE_componentWillMount() {
    // {fetch('http://apis.webhub.com.br/iconic-pcs/modelos')
    //   .then(data => data.json())
    //   .then(items => {
    //     this.setState({ items })
    //   });}

    this.setState({
      items: [
        {
           "id":1,
           "nome":"Apple II",
           "ano_lancamento":1977,
           "fabricante":"Apple Computer, Inc",
           "sistema_operacional":"Integer BASIC",
           "cpu":"MOS Technology 6502",
           "memoria":"4KB, 8KB, 12KB, 16KB, 20KB, 24KB, 32KB, 36KB, 48KB, or 64KB",
           "armazenamento":"Audio cassette\nDisk II (5.25\", 140KB, Apple)",
           "preco_inicial":"1298",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/1-apple-2.jpg"
        },
        {
           "id":2,
           "nome":"Compaq Deskpro 386",
           "ano_lancamento":1987,
           "fabricante":"Compaq",
           "sistema_operacional":"MS-DOS",
           "cpu":"INTEL 80386",
           "memoria":"1MB",
           "armazenamento":"40MB Disco",
           "preco_inicial":"7499",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/2-deskpro-386.jpg"
        },
        {
           "id":3,
           "nome":"8010 Information System",
           "ano_lancamento":1981,
           "fabricante":"Xerox Corporation",
           "sistema_operacional":"Pilot",
           "cpu":"AMD Am2900 based",
           "memoria":"384 KiB",
           "armazenamento":"10, 29, or 40 MB hard drive and 8\" floppy drive",
           "preco_inicial":"16500",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/3-8010.jpg"
        },
        {
           "id":4,
           "nome":"Macintosh Plus",
           "ano_lancamento":1986,
           "fabricante":"Apple Computer, Inc",
           "sistema_operacional":"3.0–6.0.8, 7.0-7.5.5",
           "cpu":"Motorola 68000 @ 8 MHz",
           "memoria":"1 MB RAM (150 ns 30-pin SIMM), expandable to 4 MB",
           "armazenamento":"800KB floppy",
           "preco_inicial":"2599",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/4-machintosh-plus.jpg"
        },
        {
           "id":5,
           "nome":"ThinkPad 700C",
           "ano_lancamento":1992,
           "fabricante":"IBM",
           "sistema_operacional":"MS-DOS",
           "cpu":"Intel 80386 SL @ 25MHz",
           "memoria":"4-16MB RAM",
           "armazenamento":"Internal 3.5-inch floppy\n         80MB hard drive",
           "preco_inicial":"2375",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/5-thinkpad-700.jpg"
        },
        {
           "id":6,
           "nome":"Personal Computer, Model 5150",
           "ano_lancamento":1981,
           "fabricante":"IBM",
           "sistema_operacional":"PC-DOS",
           "cpu":"Intel 8088, 4.77MHz",
           "memoria":"16K, 640K",
           "armazenamento":"dual 160KB 5.25-inch disk drives",
           "preco_inicial":"1565",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/6-ibm-pc-5150.jpg"
        },
        {
           "id":7,
           "nome":"Amiga 1000",
           "ano_lancamento":1985,
           "fabricante":"Commodore",
           "sistema_operacional":"AmigaOS",
           "cpu":"Motorola 68000 @ ≈7 MHz",
           "memoria":"256Kb",
           "armazenamento":"Internal 880K 3.5-inch floppy",
           "preco_inicial":"1295",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/7-amiga-1000.jpg"
        },
        {
           "id":8,
           "nome":"TRS-80 Model 100",
           "ano_lancamento":1983,
           "fabricante":"Tandy Corporation",
           "sistema_operacional":"Custom dedicated runtime in firmware",
           "cpu":"2.4-MHz Intel 80C85",
           "memoria":"8 KB - 32 KB",
           "armazenamento":"Cassette recorder port",
           "preco_inicial":"1099",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/8-trs-80-model100.jpg"
        },
        {
           "id":9,
           "nome":"MPC 1600-1",
           "ano_lancamento":1982,
           "fabricante":"Columbia Data Products",
           "sistema_operacional":"MS-DOS",
           "cpu":"Intel 8088",
           "memoria":"128 KB up to 1 MB",
           "armazenamento":"Dual 320 KB 5'' floppy disc drives",
           "preco_inicial":"3400",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/9-mpc-1600.jpg"
        },
        {
           "id":10,
           "nome":"PowerBook 100",
           "ano_lancamento":1991,
           "fabricante":"Apple Computer, Inc",
           "sistema_operacional":"System 6.0.8L",
           "cpu":"Motorola 68000 16 MHz",
           "memoria":"2 to 8 MB",
           "armazenamento":"20–40 MB SCSI hard disk drive internal",
           "preco_inicial":"2300",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/10-powerbook-100.jpg"
        },
        {
           "id":11,
           "nome":"VAIO 505GX",
           "ano_lancamento":1998,
           "fabricante":"Sony",
           "sistema_operacional":"Widows 98",
           "cpu":"Pentium 200MHz MMX",
           "memoria":"32MB",
           "armazenamento":"2.1GB",
           "preco_inicial":"2699",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/11-vaio-505.jpg"
        },
        {
           "id":12,
           "nome":"Altair 8800",
           "ano_lancamento":1974,
           "fabricante":"MITS",
           "sistema_operacional":"CP/M, BASIC",
           "cpu":"Intel 8080, 2.0 MHz",
           "memoria":"256 bytes",
           "armazenamento":"paper tape, cassette or\nfloppy drive",
           "preco_inicial":"650",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/12-altair-8800.jpg"
        },
        {
           "id":13,
           "nome":"Personal Computer/AT Model 5170",
           "ano_lancamento":1984,
           "fabricante":"IBM",
           "sistema_operacional":"MS-DOS",
           "cpu":"Intel 80286",
           "memoria":"512KB",
           "armazenamento":"20MB Hard drive",
           "preco_inicial":"6000",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/13-ibm-pc-5170.jpg"
        },
        {
           "id":14,
           "nome":"Atari 800",
           "ano_lancamento":1979,
           "fabricante":"Atari, Inc",
           "sistema_operacional":"Atari 8-bit",
           "cpu":"MOS Technology 6502B",
           "memoria":"8KB",
           "armazenamento":"external 90K floppy drive\ncassette recorder",
           "preco_inicial":"99995",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/14-atari-800.jpg"
        },
        {
           "id":15,
           "nome":"T1000",
           "ano_lancamento":1987,
           "fabricante":"Toshiba Corporation",
           "sistema_operacional":"MS-DOS 2.11",
           "cpu":"80C88 @ 4.77 MHz",
           "memoria":"512 kB",
           "armazenamento":"1 x 720 kB 3.5\" floppy disk drive",
           "preco_inicial":"1199",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/15-toshiba-t1000.JPG"
        },
        {
           "id":16,
           "nome":"OmniBook 300",
           "ano_lancamento":1993,
           "fabricante":"HP",
           "sistema_operacional":"Windows 3.1",
           "cpu":"Intel 386SXLV @ 20 MHz",
           "memoria":"2MB",
           "armazenamento":"40MB",
           "preco_inicial":"1515",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/16-omnibook-300.jpg"
        },
        {
           "id":17,
           "nome":"Imac G3",
           "ano_lancamento":1998,
           "fabricante":"Apple Computer, Inc",
           "sistema_operacional":"Mac OS 8",
           "cpu":"233 MHz - 700 MHz PowerPC 750 G3",
           "memoria":"32 - 512 MB",
           "armazenamento":"Up to 128 GB",
           "preco_inicial":"1299",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/17-imac-g3.jpg"
        },
        {
           "id":18,
           "nome":"Mac Mini",
           "ano_lancamento":2005,
           "fabricante":"Apple Computer, Inc",
           "sistema_operacional":"MAC OS X 10.4",
           "cpu":"1.5 GHz Intel Core Solo",
           "memoria":"512 MB (2 × 256 MB)",
           "armazenamento":"60 or 80 GB",
           "preco_inicial":"499",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/18-macmini.jpg"
        },
        {
           "id":19,
           "nome":"100LX",
           "ano_lancamento":1993,
           "fabricante":"HP",
           "sistema_operacional":"MS-DOS",
           "cpu":"Intel 80186 @ 7.91 MHz",
           "memoria":"1 MB or 2 MB",
           "armazenamento":"-",
           "preco_inicial":"699",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/19-hp100xl.jpg"
        },
        {
           "id":20,
           "nome":"eMate 300",
           "ano_lancamento":1997,
           "fabricante":"Apple Computer, Inc",
           "sistema_operacional":"Newton",
           "cpu":"ARM 710a",
           "memoria":"3MB",
           "armazenamento":"-",
           "preco_inicial":"799",
           "image":"http://apis.webhub.com.br/iconic-pcs/static/img/20-apple-e-mate-300.jpg"
        }
     ]
    })  
  }
  
  renderItem(item) {
    const { id, nome, sistema_operacional, ano_lancamento, image } = item;

    return (
      <Card
        key={ id }
        nome={ nome }
        sistema={ sistema_operacional }
        ano={ ano_lancamento }
        image={ image }
      />
    );
  }

  compare(actual,next) {
    var result;
    if(typeof actual === 'string' && typeof next === 'string') {
      actual = actual.toLowerCase();
      next = next.toLowerCase();
      result = (actual < next) ? -1 : (actual > next) ? 1 : 0;
      
    }
    else if(typeof actual === 'number' && typeof next === 'number') {
      result = actual - next;
    }

    return result;
  }

  itemSort(value) {
    this.setState({
      items: this.state.items.sort((actual, next) => this.compare(actual[value], next[value]))}
    ) ;  
  }

  itemReverse (value) {
    this.setState({ reversed: value });
    // this.setState({ selected: !value });

    // console.log(this.state.reversed)
    // console.log(this.state.selected)

    console.log(this.state.reversed)
   

  
    // this.setState({ items: this.state.reversed ? this.state.items.reverse() : this.itemSort() });

  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <OrderType 
            onSelected={ selected => this.setState({selected})} 
            onReversed={ reversed => this.setState({reversed})} 
            itemSort = { this.itemSort }
          />

          <OrderReverse
            itemReverse= { this.itemReverse } />
        </header>

        <div className="container">
          <div className="row">
            { this.state.items.map(this.renderItem) }
          </div>                  
        </div>
      </div>
    );
  }
}

export default App;
